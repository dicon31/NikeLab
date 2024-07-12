import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UomoComponent } from './uomo.component';

describe('UomoComponent', () => {
  let component: UomoComponent;
  let fixture: ComponentFixture<UomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UomoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
