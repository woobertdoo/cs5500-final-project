import { Component, signal, OnInit } from '@angular/core';
import { ContactForm } from '../form/contact-form';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.html',
  imports: [ContactForm],
  styleUrl: './contact-page.css',
})
export class ContactPage {
  emailCopied = signal(false);

  copyEmail() {
    this.emailCopied.set(true);
  }

  copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.body.removeChild(textArea);
  }

  setCopyStatus(messageEl: HTMLElement, text: string, type: string) {
    const classes = new Map<string, string>();
    classes.set("success",
      "mt-1 text-green-800 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mx-auto max-w-md");
    classes.set("error",
      "mt-1 text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mx-auto max-w-md");
    const messageElCurrentClass = messageEl.getAttribute("class");
    const classType = classes.get(type);
    messageEl.textContent = text;
    if (messageElCurrentClass) {
      messageEl.setAttribute("class", `${messageElCurrentClass} ${classes.get(type)}`);
    } else {
      if (classType) {
        messageEl.setAttribute("class", classType);
      }
    }
    messageEl.classList.remove("hidden");
  }

  initSendUsEmailSections() {
    const self = this;

    document.querySelectorAll("[data-send-us-email]").forEach((root) => {
      const button = (root.querySelector('[data-copy-email-btn="true"]') as HTMLElement);
      const messageEl = (root.querySelector("[data-copy-email-msg]") as HTMLElement);
      if (!button || !messageEl) {
        return;
      }

      // if (button.dataset['copyBound'] === "true") return;
      //button.dataset['copyBound'] = "true";

      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("button clicked!");
        if (button.getAttribute("disabled")) return;

        let didCopy = false;
        const defaultButtonText = button.textContent?.trim() || "Copy Email Address";
        const email = button.getAttribute("data-email-address")?.trim();
        if (!email) {
          self.setCopyStatus(messageEl, "Email address is missing. Please refresh this page.", "error");
          return;
        }

        self.copyTextToClipboard(email);
        didCopy = true;
        button.textContent = "Email Address Copied";
        button.toggleAttribute("disabled", true);
        button.classList.add("opacity-50", "cursor-not-allowed");
        self.setCopyStatus(
          messageEl,
          "Email address copied. Open your email, paste the address, and send your message.",
          "success",
        );

        setTimeout(() => {
          if (didCopy) {
            button.textContent = defaultButtonText;
            button.toggleAttribute("disabled", false);
            button.classList.remove("opacity-50", "cursor-not-allowed");
          }
          messageEl.classList.add("hidden");
        }, 10000);
      });
    });
  }

  ngOnInit() {
    this.initSendUsEmailSections();
    requestAnimationFrame(() => this.initSendUsEmailSections);
    setTimeout(() => this.initSendUsEmailSections, 0);
  }
  // Initial load



  constructor() {
    /*    if (document.readyState === DocumentState) {
          document.addEventListener("DOMContentLoaded", this.scheduleInit, { once: true });
        } else {
          this.scheduleInit();
        }

        /*
            document.addEventListener("astro:after-swap", this.scheduleInit);
            document.addEventListener("astro:page-load", this.scheduleInit);
            window.addEventListener("pageshow", this.scheduleInit); */
  }
}



