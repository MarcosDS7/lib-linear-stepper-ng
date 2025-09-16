import { Component, input, output } from '@angular/core';
import { StepHeaderComponent } from '../step-header/step-header.component';

@Component({
  selector: 'lib-linear-step-ng',
  imports: [StepHeaderComponent],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
})
export class StepComponent {
  toggled = output();
  title = input.required<string>();
  expanded = input.required<boolean>();
  completed = input.required<boolean>();
  completedText = input.required<string>();
  disabled = input.required<boolean>();

  onToggle(): void {
    this.toggled.emit();
  }
}
