import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';
import { ListaCarrinhoComponent } from './lista-carrinho/lista-carrinho.component';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoComponent,
    children: [
      {
        path: '',
        component: ListaCarrinhoComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhoRouting {}
