import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPropiedadesComponent } from './editar-propiedades.component';

describe('EditarPropiedadesComponent', () => {
  let component: EditarPropiedadesComponent;
  let fixture: ComponentFixture<EditarPropiedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPropiedadesComponent]
    });
    fixture = TestBed.createComponent(EditarPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
