import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojasComponent } from './lojas.component';
import { ListaLojasComponent } from './lista-lojas/lista-lojas.component';
import { DeliveryProdutosComponent } from './lista-lojas/delivery-produtos/delivery-produtos.component';

const routes: Routes = [
  {
    path: '',
    component: LojasComponent,
    children: [
      {
        path: '',
        component: ListaLojasComponent,
      },
      {
        path: 'delivery/:id',
        component: DeliveryProdutosComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojasRouting {}
