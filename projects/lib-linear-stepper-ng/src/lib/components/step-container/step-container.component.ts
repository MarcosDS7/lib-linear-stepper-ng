import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-step-container-ng',
  templateUrl: './step-container.component.html',
  styleUrl: './step-container.component.scss',
})
export class StepContainerComponent {
  toggleContainer = output();
  title = input.required<string>();
  isContainerOpen = input.required<boolean>();
  completed = input.required<boolean>();
  disabled = input.required<boolean>();

  toggleContainerEmit(): void {
    if (this.disabled()) return;
    this.toggleContainer.emit();
  }
}
