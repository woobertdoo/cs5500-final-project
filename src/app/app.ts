import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Footer } from './shared/footer/footer';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { environment } from '../environments/environment.development';

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
export class App {
  scrollUp() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {


    console.log(environment['RESEND_API_KEY']);
  }
}

