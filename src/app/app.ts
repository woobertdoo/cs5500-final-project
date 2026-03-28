import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ngOnInit() {
    requestAnimationFrame(() => this.initAnimations);
  }

  scrollUp() {
    console.log("scrolling");
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }
  initAnimations() {
    const elements = Array.from(
      document.querySelectorAll("[data-animate]:not(.visible)"),
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    const revealIfInView = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    elements.forEach((el) => {
      if (revealIfInView(el)) {
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });
  }

}
