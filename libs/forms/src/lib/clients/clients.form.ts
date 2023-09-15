import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TreeFormGroup } from '../tree.form';
import { AbstractControl } from '@angular/forms';
import { cpfValidator, phoneNumberValidator } from '../validators';

const fb = new FormBuilder();

export class ClientsFormGroup extends TreeFormGroup {
  get nome(): FormControl {
    return this.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.get('email') as FormControl;
  }

  get telefone(): FormControl {
    return this.get('telefone') as FormControl;
  }

  get cpf(): FormControl {
    return this.get('cpf') as FormControl;
  }

  get cep(): FormControl {
    return this.get('cep') as FormControl;
  }

  get ativo(): FormControl {
    return this.get('ativo') as FormControl;
  }

  constructor() {
    super({
      nome: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required, Validators.email]),
      telefone: fb.control('', [Validators.required, phoneNumberValidator]), // Adicione o validador de telefone aqui
      cpf: fb.control('', [Validators.required, cpfValidator]), // Adicione o validador de CPF aqui
      cep: fb.control(''),
      ativo: fb.control(false, [Validators.required]),
    });
  }
}

export class ClientsFiltroFormGroup extends TreeFormGroup {
  get termo(): FormControl {
    return this.get('termo') as FormControl;
  }

  constructor() {
    super({
      termo: fb.control(''),
    });
  }
}
