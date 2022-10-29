import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pacientes/listado/listado.component';
import { PacienteComponent } from './pacientes/paciente/paciente.component';
import { AgregarComponent } from './pacientes/agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent,
    pathMatch: 'full'
  },
  {
    path: 'agregar',
    component: AgregarComponent
  },
  {
    path: 'paciente',
    component: PacienteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
