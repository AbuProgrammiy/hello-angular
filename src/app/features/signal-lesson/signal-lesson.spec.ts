import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLesson } from './signal-lesson';

describe('SignalLesson', () => {
  let component: SignalLesson;
  let fixture: ComponentFixture<SignalLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLesson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalLesson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
