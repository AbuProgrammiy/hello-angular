import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLesson } from './http-lesson';

describe('HttpLesson', () => {
  let component: HttpLesson;
  let fixture: ComponentFixture<HttpLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpLesson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpLesson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
