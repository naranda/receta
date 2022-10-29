import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent, 
    PacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PacientesModule { }
