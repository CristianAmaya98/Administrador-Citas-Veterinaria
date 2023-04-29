import { FormControl } from '@angular/forms'


export const validatorCorreNoValido = (control: FormControl) => {
  const correosInvalidos = ["notengocorreo", "sincorreo", "notiene", "notengo"]

  if (control.value === '') {
    return { correoInvalid: true };
  }

  if (!control.value?.includes('@') && !control.value?.includes('.')) {
    return { correoInvalid: true };
  }

  const dataCorreo = control.value.split('@')[1].split('.')[0];

  return correosInvalidos.includes(dataCorreo) ? { correoInvalid: true } : null;
}
