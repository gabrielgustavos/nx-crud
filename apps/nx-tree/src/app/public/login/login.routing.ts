import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormEsqueciSenhaComponent } from './form-esqueci-senha/form-esqueci-senha.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: FormLoginComponent,
      },
      {
        path: 'esqueci-senha',
        component: FormEsqueciSenhaComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRouting {}
