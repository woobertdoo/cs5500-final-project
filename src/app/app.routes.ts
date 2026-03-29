import { Routes } from '@angular/router';
import { Hero } from './home/hero/hero';
import { ContactPage } from './contact/contact-page/contact-page';
import { NavStudent } from './nav-student/nav-student';
import { Docs } from './docs/docs';
import { PageNotFound } from './error/page-not-found/page-not-found';
import { NavTeacher } from './nav-teacher/nav-teacher';
import { NavInstitution } from './nav-institution/nav-institution';


export const routes: Routes = [
  { path: '', component: Hero, data: { animation: 'HeroPage' } },
  { path: 'contact', component: ContactPage, data: { animation: 'ContactPage' } },
  { path: 'docs', component: Docs, data: { animation: 'DocsPage' } },
  { path: 'students', component: NavStudent, data: { animation: 'StudentsPage' } },
  { path: 'teachers', component: NavTeacher, data: { animation: 'TeachersPage' } },
  { path: 'institutions', component: NavInstitution, data: { animation: 'InstitutionsPage' } },
  { path: '**', component: PageNotFound, data: { animation: 'PageNotFound' } },

];
