import { Component } from '@angular/core';
import { Paciente } from './paciente/interfaces/Paciente.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  paciente!: Paciente


  editarPaciente(paciente: Paciente) {
    this.paciente = paciente;
  }
}
