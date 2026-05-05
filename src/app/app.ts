import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Footer } from './shared/footer/footer';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', style({ opacity: 0, transform: 'translateY(20px)' }), { optional: true }),
        group([
          query(':leave', [
            animate('5s ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
          ], { optional: false }),
          query(':enter', [
            animate('5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ], { optional: false })
        ])
      ])
    ])
  ]
})
export class App implements AfterViewInit, OnDestroy {
  private fadeObserver?: IntersectionObserver;

  ngAfterViewInit() {
    this.initializeScrollFade();
  }

  ngOnDestroy() {
    this.fadeObserver?.disconnect();
  }

  scrollUp() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  onRouteActivated() {
    this.scrollUp();
    this.initializeScrollFade();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  private initializeScrollFade() {
    if (typeof document === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.fadeObserver?.disconnect();
    this.fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('visible');
            this.fadeObserver?.unobserve(element);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll<HTMLElement>('[data-animate], [data-animation]').forEach(element => {
      const delay = element.dataset['delay'];
      if (delay) {
        element.style.transitionDelay = delay;
      }

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.85 && rect.bottom > 0;
      if (isVisible) {
        requestAnimationFrame(() => element.classList.add('visible'));
      } else {
        this.fadeObserver?.observe(element);
      }
    });
  }
}

