import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantenimientoComponent} from "./mantenimiento/mantenimiento.component";



const routes: Routes = [
  { path: 'mantenimiento', component:  MantenimientoComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
