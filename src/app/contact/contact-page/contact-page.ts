import { Component, signal, AfterViewInit } from '@angular/core';
import { ContactForm } from '../form/contact-form';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.html',
  imports: [ContactForm],
  styleUrl: './contact-page.css',
})
export class ContactPage implements AfterViewInit {
  emailCopied = signal(false);

  copyEmailAddress() {
    const email = 'test@test.com';

    navigator.clipboard.writeText(email).then(() => {
      this.emailCopied.set(true);

      setTimeout(() => {
        this.emailCopied.set(false);
      }, 10000);
    });
  }

  ngAfterViewInit() {
    const animatedItems = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    animatedItems.forEach((item) => observer.observe(item));
  }
}



