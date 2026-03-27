import { Routes } from '@angular/router';
import { Hero } from './home/hero/hero';
import { ContactPage } from './contact/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'contact', component: ContactPage }
];
