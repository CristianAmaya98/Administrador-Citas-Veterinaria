import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Paciente } from '../../interfaces/Paciente.interface';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: [
  ]
})
export class PacienteComponent {

  @Input() paciente !: Paciente;
  @Output() onEditarPaciente: EventEmitter<Paciente> = new EventEmitter<Paciente>();
  @Output() onEliminarPaciente: EventEmitter<Paciente> = new EventEmitter<Paciente>();


  editarPaciente() {
    this.onEditarPaciente.emit(this.paciente);
  }

  eliminarPaciente() {
    this.onEliminarPaciente.emit(this.paciente);
  }
}
