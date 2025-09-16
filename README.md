<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white" alt="Angular"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white" alt="SCSS"/>
  <img src="https://img.shields.io/badge/Angular%20Tests-Jasmine%20%2B%20Karma-8A4182?logo=jasmine&logoColor=white" alt="Angular Tests"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version"/>
  <img src="https://img.shields.io/github/last-commit/MarcosDS7/lib-linear-stepper-ng" alt="Last Commit"/>
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" alt="Status"/>
  <img src="https://img.shields.io/github/stars/MarcosDS7/lib-linear-stepper-ng?style=social" alt="GitHub stars"/>
</p>

<h1 align="center">LIBRARY LINEAR UP NG - STEPPER</h1>

<sub align="center">`Open source Angular 20 library` providing a single-page linear stepper, perfect for forms, registrations, and interactive pages. Steps are completed progressively, unlocking the next step only when the previous one is finished, ensuring a clear and intuitive user experience. Fully customizable and easy to integrate into Angular project.</sub>

##

#### FEATURES

- Linear stepper: steps unlock sequentially;
- Expand/collapse functionality for each step;
- Fully customizable styling using `Tailwind-like` classes or your own `CSS`;
- Supports any content inside steps (forms, text, components);
- Easy integration with `Angular 20` signals and TypeScript;

##

#### INSTALLATION

> <sub>[WARNING]</sub>  
> <sub>The library has not been published yet. To use it, you need to **clone the project** and create an `npm link`.</sub>
<br />

1. After cloning the library, navigate to the `lib-linear-stepper-ng` folder and run the command:

```
ng build
```

2. A dist folder will be created in the root. Then, navigate to `dist/lib-linear-stepper-ng` and run the command:

```
npm link
```

3. Inside your Angular project:

```
npm link lib-linear-stepper-ng
```

##

#### SETUP

<sub>In your stepper setup:</sub>


1. Import the step component:

```
import { StepComponent } from 'lib-linear-stepper-ng';
...
imports: [StepComponent]
```

2. Create the `type` that will hold the names of your steps:

```
type StepTypes = 'register' | 'choose-plan' | null;
```

3. Control variable for the steps:

```
expandedStep = signal<StepTypes | null>(null);
```

4. Function that opens the selected step:

```
onToggle(step: StepTypes): void {
  this.expandedStep.set(this.expandedStep() === step ? null : step);
}
```

5. In your `angular.json → build → serve`, add the following code:

```
...
"defaultConfiguration": "development", # already exists
"options": {
  "buildTarget": "ng:build",
  "prebundle": {
      "exclude": ["lib-linear-stepper-ng"]
  }
}
```

##

#### USAGE EXEMPLE

```
<lib-linear-step-ng
  (toggled)="onToggle('register')"
  title="User registration"
  [expanded]="expandedStep() === 'register'"
  [completed]="true"
  completedText="Completed"
  [disabled]="false"
  [classes]="{
    button: 'rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 shadow-sm',
    title: 'text-sm font-medium text-gray-100 text-left',
    badge:
      'flex items-center rounded-md bg-green-700 px-2 py-0.5 text-xs font-medium text-green-100',
    iconHexColor: '#3b82f6',
    box: 'mt-2 rounded-2xl border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-gray-100 shadow-inner'
  }"
>
  <p>< your code ></p>
  <p>< your form ></p>
  <p>< your idea ></p>
</lib-linear-step-ng>
```

##

#### RESULT

<img width="1368" height="237" alt="image" src="https://github.com/user-attachments/assets/761d4956-d30a-4de5-9b21-e37260b81fa0" />

##

#### HOW IT WORKS

```
 ├── title
 │    └── Name of the step
 ├── completed
 │    └── Indicates if the step has been completed. Completed steps should unlock the next step.
 ├── disabled
 │    └── Should be true if the previous step is not complete
 ├── completedText
 │    └── Text displayed in the completed badge
 ├── expanded
 │    └── Controls whether the step is open or closed.
 │         The step expands when the variable matches its name.
 ├── toggled
 │    └── Event output to control opening and closing of steps
 ├── classes
 │    └── Object containing custom styles (Tailwind-like classes or your own CSS).
 │         iconHexColor accepts only hexadecimal color.
 └── Content
      └── You can add any content inside a step:
           ├── Forms
           ├── Text
           └── Angular components
      Logic for advancing steps is up to you.
```

##

Contributors

[![Marcos Souza](https://img.shields.io/badge/Marcos_Souza-Author-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/marcos-souza-front-end-ui-ux-design/)

