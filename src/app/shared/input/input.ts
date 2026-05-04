import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  control = input.required<FormControl>();
  placeholder = input<string>('');
  type = input<string>('text');
  inputId = input.required<string>();
}
