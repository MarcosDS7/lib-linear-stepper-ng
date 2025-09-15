import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibLinearStepperNg } from './lib-linear-stepper-ng';

describe('LibLinearStepperNg', () => {
  let component: LibLinearStepperNg;
  let fixture: ComponentFixture<LibLinearStepperNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibLinearStepperNg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibLinearStepperNg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
