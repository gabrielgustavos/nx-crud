import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormTelespectadorComponent } from './form-telespectador/form-telespectador.component';
import { FormEsqueciSenhaComponent } from './form-esqueci-senha/form-esqueci-senha.component';
import { FormCadastrarSenhaComponent } from './form-cadastrar-senha/form-cadastrar-senha.component';
import { FormRedefinirSenhaComponent } from './form-redefinir-senha/form-redefinir-senha.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: FormTelespectadorComponent,
      },
      {
        path: 'esqueci-senha',
        component: FormEsqueciSenhaComponent,
      },
      {
        path: 'criar-senha',
        component: FormCadastrarSenhaComponent,
      },
      {
        path: 'redefinir-senha',
        component: FormRedefinirSenhaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRouting {}
