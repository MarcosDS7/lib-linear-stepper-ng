import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepContainerComponent } from './step-container.component';

describe('StepContainerComponent', () => {
  let component: StepContainerComponent;
  let fixture: ComponentFixture<StepContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
