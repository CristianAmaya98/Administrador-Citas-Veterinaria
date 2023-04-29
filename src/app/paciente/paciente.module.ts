import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ListadoPacientesComponent,
    PacienteComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioComponent,
    ListadoPacientesComponent
  ]
})
export class PacienteModule { }
