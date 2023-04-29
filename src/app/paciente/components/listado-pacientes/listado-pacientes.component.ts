import { Component, EventEmitter, Output } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../interfaces/Paciente.interface';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styles: [
  ]
})
export class ListadoPacientesComponent {

  @Output() onEditarPaciente: EventEmitter<Paciente> = new EventEmitter<Paciente>();

  get pacientes(): Paciente[] {
    return this.pacienteService.getFindAllPaciente()
  }

  constructor(private pacienteService: PacienteService) { }


  editarPaciente(paciente: Paciente) {
    this.onEditarPaciente.emit(paciente);
  }

  eliminarPaciente(paciente: Paciente) {
    this.pacienteService.deletePaciente(paciente)
  }
}
