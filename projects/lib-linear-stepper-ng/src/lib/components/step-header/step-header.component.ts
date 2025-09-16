import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-step-header-ng',
  templateUrl: './step-header.component.html',
  styleUrl: './step-header.component.scss',
})
export class StepHeaderComponent {
  toggled = output();
  title = input.required<string>();
  expanded = input.required<boolean>();
  completed = input.required<boolean>();
  disabled = input.required<boolean>();

  onToggle(): void {
    if (this.disabled()) return;

    this.toggled.emit();
  }
}
