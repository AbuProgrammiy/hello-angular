import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGallary } from './photo-gallary';

describe('PhotoGallary', () => {
  let component: PhotoGallary;
  let fixture: ComponentFixture<PhotoGallary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoGallary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGallary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
