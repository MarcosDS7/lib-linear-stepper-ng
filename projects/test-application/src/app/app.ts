import { LibLinearStepperNg } from './../../../lib-linear-stepper-ng/src/lib/lib-linear-stepper-ng';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LibLinearStepperNg],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test-application');
}
