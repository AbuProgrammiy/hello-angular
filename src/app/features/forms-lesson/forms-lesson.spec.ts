import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLesson } from './forms-lesson';

describe('FormsLesson', () => {
  let component: FormsLesson;
  let fixture: ComponentFixture<FormsLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsLesson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsLesson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
