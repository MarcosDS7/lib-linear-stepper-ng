import { StepComponent } from './../../../lib-linear-stepper-ng/src/lib/components/step/step.component';
import { Component, signal } from '@angular/core';

type StepTypes = 'register' | 'choose-plan' | null;

@Component({
  selector: 'app-root',
  imports: [StepComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  expandedStep = signal<StepTypes | null>(null);
  
  onToggle(step: StepTypes): void {
    this.expandedStep.set(this.expandedStep() === step ? null : step);
  }
}
