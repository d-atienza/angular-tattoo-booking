import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooGalleryComponent } from './tattoo-gallery.component';

describe('TattooGalleryComponent', () => {
  let component: TattooGalleryComponent;
  let fixture: ComponentFixture<TattooGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattooGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattooGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
