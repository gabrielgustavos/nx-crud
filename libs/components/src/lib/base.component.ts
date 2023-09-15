import { Directive, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';

@Directive()
export class BaseComponent implements OnDestroy {
  private subscriptions = new Subscription();
  protected destroyed$ = new Subject<void>();

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.destroyed$.next();
  }

  protected addSubscription(subscription: Subscription) {
    this.subscriptions.add(subscription);
  }

  isFieldValid(control: AbstractControl) {
    if (!control) return false;

    return control.touched && control.invalid;
  }

  displayFieldCss(control: AbstractControl) {
    return this.isFieldValid(control) ? 'invalid' : '';
  }

  displayFieldMessage(control: AbstractControl) {
    const invalido = this.isFieldValid(control);
    console.log(control.errors?.['cpfInvalido']);
    if (invalido) {
      if (control.hasError('required')) return 'Preencha, campo obrigatório!';

      if (control.hasError('email'))
        return 'Preencha corretamente o campo de email!';

      if (control.hasError('invalidPassword'))
        return 'A senha precisa ter 8 ou mais caracteres!';
      if (control.hasError('cpfInvalido')) return 'CPF inválido!';

      if (control.hasError('invalidPhoneNumber')) return 'Telefone inválido!';
      return '';
    }
    return '';
  }
}
