import { ControlDropdownContainerType } from './../../../lib-linear-stepper-ng/src/lib/types/step.type';
import { StepComponent } from './../../../lib-linear-stepper-ng/src/lib/components/step/step.component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [StepComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('test-application');
  controlContainer: ControlDropdownContainerType = null;


  toggleDropdown(step: ControlDropdownContainerType): void {
    this.controlContainer = this.controlContainer === step ? null : step;
  }
}
