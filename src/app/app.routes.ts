import { Routes } from '@angular/router';
import { Hero } from './home/hero/hero';
import { ContactPage } from './contact/contact-page/contact-page';
import { NavStudent } from './nav-student/nav-student';
import { Docs } from './docs/docs';
import { PageNotFound } from './error/page-not-found/page-not-found';


export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'contact', component: ContactPage },
  { path: 'docs', component: Docs },
  { path: 'students', component: NavStudent },
  { path: '**', component: PageNotFound },
];
