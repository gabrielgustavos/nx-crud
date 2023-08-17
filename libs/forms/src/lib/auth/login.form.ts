import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { PrincipalFormGroup } from "../principal.form";

const fb = new FormBuilder();

export class LoginFormGroup extends PrincipalFormGroup {
  get email(): FormControl {
    return this.get('email') as FormControl
  }

  get senha(): FormControl {
    return this.get('senha') as FormControl
  }

  constructor() {
    super({
      email: fb.control('', [Validators.required, Validators.email]),
      senha: fb.control('', [Validators.required])
    })
  }
}
