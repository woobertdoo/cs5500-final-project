import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-institution',
  imports: [RouterModule],
  templateUrl: './nav-institution.html',
  styleUrl: './nav-institution.css',
})
export class NavInstitution {
guides = [
  { title: 'How "Process Feedback for Google Docs" extension compares to others', link:'extension-compare'},
  { title: 'Compliance with Australian Privacy Principles', link: '/compliance' },
  { title: 'How Process Feedback extensions work', link: '/extensions-work' },
  ];
}
