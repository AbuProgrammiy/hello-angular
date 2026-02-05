import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFactory } from './number-factory';

describe('NumberFactory', () => {
  let component: NumberFactory;
  let fixture: ComponentFixture<NumberFactory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberFactory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberFactory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
