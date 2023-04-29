import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/Paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private pacientes: Paciente[] = [];
  private keyStore: string = 'pacientes'

  constructor() {
    this.pacientes = this.getFindAllPaciente();
  }


  savePaciente(paciente: Paciente) {
    this.pacientes = [paciente, ...this.pacientes];
    localStorage.setItem(this.keyStore, JSON.stringify(this.pacientes));
  }

  getFindAllPaciente() {
    return JSON.parse(localStorage.getItem(this.keyStore)!) ?? []
  }
}
