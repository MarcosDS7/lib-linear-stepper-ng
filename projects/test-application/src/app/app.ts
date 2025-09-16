import { StepComponent } from './../../../lib-linear-stepper-ng/src/lib/components/step/step.component';
import { Component, signal } from '@angular/core';

type StepTypes = 'register' | 'online' | null;

@Component({
  selector: 'app-root',
  imports: [StepComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('test-application');
  expandedStep: StepTypes = null;
  
  onToggle(step: StepTypes): void {
    this.expandedStep = this.expandedStep === step ? null : step;
  }
}
