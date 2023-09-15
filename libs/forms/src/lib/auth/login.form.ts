import {
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { PrincipalFormGroup } from '../principal.form';

const fb = new FormBuilder();

// Função de validação personalizada para senha
function customPasswordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.value;

  // Verifique se a senha tem pelo menos 8 caracteres
  if (!password || password.length < 8) {
    return {
      invalidPassword: true,
      message: 'A senha deve ter pelo menos 8 caracteres',
    };
  }

  // Verifique se a senha contém pelo menos um caractere maiúsculo
  if (!/[A-Z]/.test(password)) {
    return {
      invalidPassword: true,
      message: 'A senha deve conter pelo menos um caractere maiúsculo',
    };
  }

  // Verifique se a senha contém pelo menos um caractere especial (você pode personalizar a lista de caracteres especiais)
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
    return {
      invalidPassword: true,
      message: 'A senha deve conter pelo menos um caractere especial',
    };
  }

  return null;
}

export class LoginFormGroup extends PrincipalFormGroup {
  get email(): FormControl {
    return this.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.get('senha') as FormControl;
  }

  constructor() {
    super({
      email: fb.control('', [Validators.required, Validators.email]),
      senha: fb.control('', [Validators.required]), // Use o validador personalizado aqui
    });
  }
}
