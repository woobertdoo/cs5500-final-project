import { Routes } from '@angular/router';
import { Hero } from './home/hero/hero';
import { ContactPage } from './contact/contact-page/contact-page';
import { NavStudent } from './nav-student/nav-student';
import { Docs } from './docs/docs';


export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'contact', component: ContactPage },
  { path: 'docs', component: Docs },
  { path: 'students', component: NavStudent },
];
