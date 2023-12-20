import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { EditarPropiedadesComponent } from './propiedades/editar-propiedades/editar-propiedades.component';
import { GuardarPropiedadesComponent } from './propiedades/guardar-propiedades/guardar-propiedades.component';
import { PagosComponent } from './pagos/pagos.component';
import { GuardarPagoComponent } from './pagos/guardar-pago/guardar-pago.component';
import { EditarPagoComponent } from './pagos/editar-pago/editar-pago.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { GuardarUnidadesComponent } from './unidades/guardar-unidades/guardar-unidades.component';
import { EditarUnidadesComponent } from './unidades/editar-unidades/editar-unidades.component';
import { ResidentesComponent } from './residentes/residentes.component';
import { GuardarResidentesComponent } from './residentes/guardar-residentes/guardar-residentes.component';
import { EditarResidentesComponent } from './residentes/editar-residentes/editar-residentes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { EditarMantenimientoComponent } from './mantenimientos/editar-mantenimiento/editar-mantenimiento.component';
import { GuardarMantenimientoComponent } from './mantenimientos/guardar-mantenimiento/guardar-mantenimiento.component';

=======
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PagoComponent } from './pago/pago.component';
import { PersonalComponent } from './personal/personal.component';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { ActualizarPropiedadComponent } from './actualizar-propiedad/actualizar-propiedad.component';
import { ActualizarPersonalComponent } from './actualizar-personal/actualizar-personal.component';
import { ActualizarPagoComponent } from './actualizar-pago/actualizar-pago.component';
import { ActualizarMantenimientoComponent } from './actualizar-mantenimiento/actualizar-mantenimiento.component';
import { ResidenteComponent } from './residente/residente.component';
import { UnidadComponent } from './unidad/unidad.component';
>>>>>>> 8039ec33c34e03ac266a84969bef9d2519c59607

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PropiedadesComponent,
    EditarPropiedadesComponent,
    GuardarPropiedadesComponent,
    PagosComponent,
    GuardarPagoComponent,
    EditarPagoComponent,
    UnidadesComponent,
    GuardarUnidadesComponent,
    EditarUnidadesComponent,
    ResidentesComponent,
    GuardarResidentesComponent,
    EditarResidentesComponent,
    MantenimientosComponent,
    EditarMantenimientoComponent,
    GuardarMantenimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
=======
    MantenimientoComponent,
    NavegacionComponent,
    PagoComponent,
    PersonalComponent,
    PropiedadComponent,
    ActualizarPropiedadComponent,
    ActualizarPersonalComponent,
    ActualizarPagoComponent,
    ActualizarMantenimientoComponent,
    ResidenteComponent,
    UnidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 8039ec33c34e03ac266a84969bef9d2519c59607
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
