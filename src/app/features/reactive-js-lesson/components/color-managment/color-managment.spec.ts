import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorManagment } from './color-managment';

describe('ColorManagment', () => {
  let component: ColorManagment;
  let fixture: ComponentFixture<ColorManagment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorManagment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorManagment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
