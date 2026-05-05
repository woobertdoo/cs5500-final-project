import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Input } from '../../shared/input/input';
import { EmailService } from '../../services/email.service';
import { confirmEmailValidator } from '../../../validators/confirm-email.validator';

@Component({
  selector: 'app-contact-form',
  imports: [Input, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  emailService = inject(EmailService);
  fb = inject(FormBuilder);

  sending = signal(false);
  status = signal<"idle" | "sent" | "error">("idle");
  errorMessage = signal("");

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    confirmEmail: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', []]
  }, {
    validators: [confirmEmailValidator]
  });

  onSubmit() {
    console.log("Sending Message");
    this.sending.set(true);
    this.status.set("idle");

    const name = this.form.controls.name.value;
    const email = this.form.controls.email.value;

    this.emailService.sendContactEmail(this.form.value as { name: string, email: string }).subscribe({
      next: () => {
        this.status.set("sent");
        this.sending.set(false);
        this.form.reset();
        console.log("Message Sent!");
      },
      error: (err) => {
        this.status.set("error");
        this.errorMessage.set(err.error?.error || "Failed to send. Try again");
        this.sending.set(false);
      }
    });
  }

}
