import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule, InputModule } from '@nx-org/components';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { FormEsqueciSenhaComponent } from './form-esqueci-senha/form-esqueci-senha.component';
import { FormLoginComponent } from './form-login/form-login.component';

@NgModule({
  imports: [CommonModule, RouterModule, LoginRouting, ButtonModule, InputModule],
  exports: [],
  declarations: [
    LoginComponent,
    FormEsqueciSenhaComponent,
    FormLoginComponent
  ],
  providers: [],
})
export class LoginModule { }
