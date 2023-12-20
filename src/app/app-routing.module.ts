import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { EditarPropiedadesComponent } from './propiedades/editar-propiedades/editar-propiedades.component';
import { GuardarPropiedadesComponent } from './propiedades/guardar-propiedades/guardar-propiedades.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { GuardarUnidadesComponent } from './unidades/guardar-unidades/guardar-unidades.component';
import { GuardarMantenimientoComponent } from './mantenimientos/guardar-mantenimiento/guardar-mantenimiento.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { EditarMantenimientoComponent } from './mantenimientos/editar-mantenimiento/editar-mantenimiento.component';
import { EditarUnidadesComponent } from './unidades/editar-unidades/editar-unidades.component';
import { PagosComponent } from './pagos/pagos.component';
import { GuardarPagoComponent } from './pagos/guardar-pago/guardar-pago.component';
import { EditarPagoComponent } from './pagos/editar-pago/editar-pago.component';
import { ResidentesComponent } from './residentes/residentes.component';
import { EditarResidentesComponent } from './residentes/editar-residentes/editar-residentes.component';
import { GuardarResidentesComponent } from './residentes/guardar-residentes/guardar-residentes.component';

const routes: Routes = [
  { path: '', redirectTo: 'propiedades', pathMatch: 'full' },
  {path:'propiedades',component:PropiedadesComponent},
  {path:'editar-propiedades/:id_propiedades', component:EditarPropiedadesComponent},
  {path:'guardar-propiedades', component:GuardarPropiedadesComponent},
  {path:'unidades', component:UnidadesComponent},
  {path:'guardar-unidades', component:GuardarUnidadesComponent},
  { path: 'editar-unidad/:id', component: EditarUnidadesComponent },
  {path:'guardar-mantenimientos/:id_propiedades',component:GuardarMantenimientoComponent},
  {path:'mantenimientos', component:MantenimientosComponent},
  { path: 'editar-mant/:id_mantenimiento', component: EditarMantenimientoComponent },
  {path:'pagos',component:PagosComponent},
  {path:'guardar-pagos/:id_residente', component:GuardarPagoComponent},
  {path:'editar-pagos/:id_pago', component:EditarPagoComponent},
  
  
  {path:'residentes', component:ResidentesComponent},
  {path:'editar-residente/:id_residente', component:EditarResidentesComponent},
  {path:'guardar-residente', component:GuardarResidentesComponent}



];

=======
import {MantenimientoComponent} from "./mantenimiento/mantenimiento.component";



const routes: Routes = [
  { path: 'mantenimiento', component:  MantenimientoComponent },

];
>>>>>>> 8039ec33c34e03ac266a84969bef9d2519c59607
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
