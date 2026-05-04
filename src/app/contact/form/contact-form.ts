import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Input } from '../../shared/input/input';
import { confirmEmailValidator } from '../../../validators/confirm-email.validator';
import { Resend } from 'resend';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-contact-form',
  imports: [Input, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  fb = inject(FormBuilder);
  resend = new Resend(environment.RESEND_API_KEY);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    confirmEmail: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  }, {
    validators: [confirmEmailValidator]
  });

  async sendEmail() {
    if (this.form.value.email && this.form.value.name) {
      const { data, error } = await this.resend.emails.send({
        from: 'Jamie <jamie.a.harris97@gmail.com>',
        to: [this.form.value.email],
        subject: 'We have received your message',
        html: `Thank you for contacting us, ${this.form.value.name}`
      });
    }
  }
}
