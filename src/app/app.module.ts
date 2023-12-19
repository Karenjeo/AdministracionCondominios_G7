import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    MantenimientoComponent,
    NavegacionComponent,
    PagoComponent,
    PersonalComponent,
    PropiedadComponent,
    ActualizarPropiedadComponent,
    ActualizarPersonalComponent,
    ActualizarPagoComponent,
    ActualizarMantenimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
