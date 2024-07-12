import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraziepaginaComponent } from './graziepagina.component';

describe('GraziepaginaComponent', () => {
  let component: GraziepaginaComponent;
  let fixture: ComponentFixture<GraziepaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraziepaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraziepaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
