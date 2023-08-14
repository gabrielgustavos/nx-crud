import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule, InputModule } from '@nx-org/components';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { FormTelespectadorComponent } from './form-telespectador/form-telespectador.component';
import { FormEsqueciSenhaComponent } from './form-esqueci-senha/form-esqueci-senha.component';
import { FormCadastrarSenhaComponent } from './form-cadastrar-senha/form-cadastrar-senha.component';
import { FormRedefinirSenhaComponent } from './form-redefinir-senha/form-redefinir-senha.component';

@NgModule({
  imports: [CommonModule, RouterModule, LoginRouting, ButtonModule, InputModule],
  exports: [],
  declarations: [
    LoginComponent,
    FormTelespectadorComponent,
    FormEsqueciSenhaComponent,
    FormCadastrarSenhaComponent,
    FormRedefinirSenhaComponent,
  ],
  providers: [],
})
export class LoginModule { }
