import { Component, Input } from '@angular/core';
import { Paciente } from '../../interfaces/Paciente.interface';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styles: [
  ]
})
export class PacienteComponent  {

  @Input() paciente !: Paciente;

}
