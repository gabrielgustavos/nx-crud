import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TreeFormGroup } from '../tree.form';

const fb = new FormBuilder();

export class BlogFormGroup extends TreeFormGroup {
  get titulo(): FormControl {
    return this.get('titulo') as FormControl;
  }

  get descricao(): FormControl {
    return this.get('descricao') as FormControl;
  }

  constructor() {
    super({
      titulo: fb.control('', [Validators.required]),
      descricao: fb.control('', [Validators.required]),
    });
  }
}
