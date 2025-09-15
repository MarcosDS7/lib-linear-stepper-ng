import { Component } from '@angular/core';
import { StepContainerComponent } from '../step-container/step-container.component';

@Component({
  selector: 'lib-linear-step-item-ng',
  imports: [StepContainerComponent],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
})
export class StepComponent {}
