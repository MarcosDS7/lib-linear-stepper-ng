import { Component, input, output } from '@angular/core';
import { StepClasses } from '../../interfaces/step.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-step-header-ng',
  templateUrl: './step-header.component.html',
  imports: [CommonModule],
  styleUrl: './step-header.component.scss',
})
export class StepHeaderComponent {
  toggled = output();
  title = input.required<string>();
  expanded = input.required<boolean>();
  completed = input.required<boolean>();
  completedText = input.required<string>();
  disabled = input.required<boolean>();

  classes = input.required<StepClasses>({});

  onToggle(): void {
    if (this.disabled()) return;

    this.toggled.emit();
  }
}
