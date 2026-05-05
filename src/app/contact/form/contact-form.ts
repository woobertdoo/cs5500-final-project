import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
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
  status = signal<'idle' | 'sent' | 'error'>('idle');
  errorMessage = signal('');

  turnstileToken = '';

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
    if (this.form.invalid) return;

    this.sending.set(true);
    this.status.set('idle');

    setTimeout(() => {
      const turnstile = (window as any).turnstile;

      if (!turnstile) {
        this.status.set('error');
        this.errorMessage.set('Verification failed to load. Please refresh and try again.');
        this.sending.set(false);
        return;
      }

      turnstile.render('#turnstile-container', {
        sitekey: '0x4AAAAAADJJvb8207tWdGiR',
        size: 'normal',
        callback: (token: string) => {
          this.turnstileToken = token;
          this.submitForm();
        },
        'error-callback': () => {
          this.status.set('error');
          this.errorMessage.set('Verification failed. Please try again.');
          this.sending.set(false);
        }
      });
    }, 0);
  }

  submitForm() {
    const payload = {
      ...this.form.value,
      turnstileToken: this.turnstileToken
    };

    this.emailService.sendContactEmail(payload as any).subscribe({
      next: () => {
        this.status.set('sent');
        this.sending.set(false);
        this.form.reset();
        this.turnstileToken = '';
        console.log('Message Sent!');
      },
      error: (err) => {
        this.status.set('error');
        this.errorMessage.set(err.error?.error || 'Failed to send. Try again.');
        this.sending.set(false);
      }
    });
  }
}