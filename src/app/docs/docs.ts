import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-docs',
  imports: [RouterModule],
  templateUrl: './docs.html',
  styleUrl: './docs.css',
})
export class Docs {
studentguides = [
  { title: 'Instructions for students', link:'student-instructions'},
  { title: 'Student submission guide', link: '/student-submission' },
  { title: 'How to explore Google Docs documents with multiple tabs', link: '/gdocs-tabs' },
  { title: 'How to reflect on your generative AI use', link: '/ai-reflection' },
  { title: 'How to share the edit link of a Google Docs document', link: '/gdocs-share' },
  { title: 'How to install Process Feedback for Google Docs extension? A step-by-step tutorial', link: '/install-extension' },
  { title: 'Writing process reflection prompts', link: '/reflection-prompts' }
];
teacherguides = [
  { title: 'Teachers', link: '/teachers' },
  { title: 'Classroom announcement or syllabus statement', link: '/classroom-announcement' },
  { title: 'Integration option 1 - Let students choose what editor they want to use', link: '/integration-option-1' },
  { title: 'Integration option 2 - Create a custom editor for your class', link: '/integration-option-2' },
  { title: 'Integration option 3 - Create an assignment in Process Feedback', link: '/integration-option-3' },
  { title: 'Example Feedback prompts library', link: '/feedback-prompts' },
  { title: 'How to explore Google Docs documents with multiple tabs', link: '/gdocs-tabs' },
  { title: 'Identify AI-assisted writing patterns', link: '/ai-patterns' },
  { title: 'How to create an assignment? A step-by-step tutorial', link: '/create-assignment' },
  { title: 'How to create a custom editor? A step-by-step tutorial', link: '/create-custom-editor' },
  { title: 'How to install Process Feedback for Google Docs extension? A step-by-step tutorial', link: '/install-extension' },
  { title: 'Writing process reflection prompts', link: '/reflection-prompts' },
  { title: 'How to use AI to explore the writing process', link: '/ai-exploration' },
  { title: 'I have a large class. How can I use Process Feedback?', link: '/large-class' }
];
institutionguides = [
  { title: 'How "Process Feedback for Google Docs" extension compares to others', link:'extension-compare'},
  { title: 'Compliance with Australian Privacy Principles', link: '/compliance' },
  { title: 'How Process Feedback extensions work', link: '/extensions-work' },
  ];
}
