import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { TreeFormGroup } from "../tree.form";

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
      telefone: fb.control(''),
      cpf: fb.control('', [Validators.required]),
      cep: fb.control(''),
      ativo: fb.control(false, [Validators.required]),
    });
  }
}
