import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonLayout } from './lesson-layout';

describe('LessonLayout', () => {
  let component: LessonLayout;
  let fixture: ComponentFixture<LessonLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
