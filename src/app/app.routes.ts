import { Routes } from '@angular/router';
import { Hero } from './home/hero/hero';
import { Form } from './contact/form/form';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'contact', component: Form }
];