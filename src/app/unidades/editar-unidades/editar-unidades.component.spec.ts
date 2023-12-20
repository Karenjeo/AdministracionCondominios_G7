import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadesComponent } from './editar-unidades.component';

describe('EditarUnidadesComponent', () => {
  let component: EditarUnidadesComponent;
  let fixture: ComponentFixture<EditarUnidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUnidadesComponent]
    });
    fixture = TestBed.createComponent(EditarUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
