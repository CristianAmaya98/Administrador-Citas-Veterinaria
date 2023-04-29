import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Paciente } from '../../interfaces/Paciente.interface';
import { PacienteService } from '../../services/paciente.service';
import { validatorCorreNoValido } from '../../helpers/validaciones';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent {

  formularioPaciente: FormGroup = this.formBuilder.group({
    mascota: ['', [Validators.required]],
    propietario: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email, validatorCorreNoValido]],
    fecha: ['', [Validators.required]],
    sintomas: ['', [Validators.required]]
  })

  objError = {
    error: false,
    message: ''
  }

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService) {
    this.verificarErrores()
  }


  generarIdPaciente() {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  savePaciente() {
    if (this.formularioPaciente.invalid) {
      return;
    }

    const objPaciente: Paciente = {
      ...this.formularioPaciente.value,
      id: this.generarIdPaciente()
    }
    this.pacienteService.savePaciente(objPaciente);

    this.formularioPaciente.reset();
  }


  verificarErrores() {
    const validateCampos = ["mascota",
      "propietario",
      "email",
      "fecha",
      "sintomas"]

    validateCampos.forEach(campo => {
      if (this.formularioPaciente.controls[campo].touched && this.formularioPaciente.controls[campo].errors) {
        this.objError.error = true;
        this.objError.message = 'Todos los campos son obligatorios'

        setTimeout(() => {
          this.objError.error = false;
          this.objError.message = ''
        }, 4000);
      }
    })
  }
}
