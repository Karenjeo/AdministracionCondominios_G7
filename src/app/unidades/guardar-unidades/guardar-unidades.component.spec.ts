import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarUnidadesComponent } from './guardar-unidades.component';

describe('GuardarUnidadesComponent', () => {
  let component: GuardarUnidadesComponent;
  let fixture: ComponentFixture<GuardarUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarUnidadesComponent]
    });
    fixture = TestBed.createComponent(GuardarUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
