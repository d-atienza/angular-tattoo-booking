import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooDetailsComponent } from './tattoo-details.component';

describe('TattooDetailsComponent', () => {
  let component: TattooDetailsComponent;
  let fixture: ComponentFixture<TattooDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattooDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattooDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
