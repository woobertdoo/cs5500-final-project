import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-student',
  imports: [RouterModule],
  templateUrl: './nav-student.html',
  styleUrl: './nav-student.css',
})
export class NavStudent {

 guides = [
  { title: 'Instructions for students', link:'student-instructions'},
  { title: 'Student submission guide', link: '/student-submission' },
  { title: 'How to explore Google Docs documents with multiple tabs', link: '/gdocs-tabs' },
  { title: 'How to reflect on your generative AI use', link: '/ai-reflection' },
  { title: 'How to share the edit link of a Google Docs document', link: '/gdocs-share' },
  { title: 'How to install Process Feedback for Google Docs extension? A step-by-step tutorial', link: '/install-extension' },
  { title: 'Writing process reflection prompts', link: '/reflection-prompts' }
];
}
