import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoom } from './show-room';

describe('ShowRoom', () => {
  let component: ShowRoom;
  let fixture: ComponentFixture<ShowRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowRoom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRoom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
