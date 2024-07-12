import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarelloComponent } from './carello.component';

describe('CarelloComponent', () => {
  let component: CarelloComponent;
  let fixture: ComponentFixture<CarelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarelloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
