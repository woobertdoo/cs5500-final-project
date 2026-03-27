import { Routes } from '@angular/router';
import { NavStudent } from './nav-student/nav-student';
import { Docs } from './docs/docs';

export const routes: Routes = [
    { path: 'docs', component: Docs },
    { path: 'students', component: NavStudent },
];
