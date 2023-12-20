import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
