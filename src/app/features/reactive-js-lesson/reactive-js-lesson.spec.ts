import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveJsLesson } from './reactive-js-lesson';

describe('ReactiveJsLesson', () => {
  let component: ReactiveJsLesson;
  let fixture: ComponentFixture<ReactiveJsLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveJsLesson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveJsLesson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
