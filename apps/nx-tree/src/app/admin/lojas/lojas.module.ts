import { NgModule } from '@angular/core';

import { LojasComponent } from './lojas.component';
import { LojasRouting } from './lojas.routing';
import { MercadosService } from '@nx-org/services';
import { CommonModule } from '@angular/common';
import { ListaLojasComponent } from './lista-lojas/lista-lojas.component';
import { DeliveryProdutosComponent } from './lista-lojas/delivery-produtos/delivery-produtos.component';

@NgModule({
  imports: [CommonModule, LojasRouting],
  exports: [],
  declarations: [
    LojasComponent,
    ListaLojasComponent,
    DeliveryProdutosComponent,
  ],
  providers: [MercadosService],
})
export class LojasModule {}
