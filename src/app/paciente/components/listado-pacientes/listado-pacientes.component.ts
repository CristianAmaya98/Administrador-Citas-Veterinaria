import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../interfaces/Paciente.interface';

@Component({
  selector: 'app-listado-pacientes',
  templateUrl: './listado-pacientes.component.html',
  styles: [
  ]
})
export class ListadoPacientesComponent {

  get pacientes(): Paciente[] {
    return this.pacienteService.getFindAllPaciente()
  }

  constructor(private pacienteService: PacienteService) { }

}
