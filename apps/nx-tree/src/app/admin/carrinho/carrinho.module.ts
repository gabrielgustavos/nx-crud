import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoRouting } from './carrinho.routing';
import { ListaCarrinhoComponent } from './lista-carrinho/lista-carrinho.component';

@NgModule({
  imports: [CommonModule, CarrinhoRouting],
  exports: [],
  declarations: [CarrinhoComponent, ListaCarrinhoComponent],
  providers: [],
})
export class CarrinhoModule {}
