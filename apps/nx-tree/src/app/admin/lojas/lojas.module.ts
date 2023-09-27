import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MercadosService } from '@nx-org/services';
import { DeliveryProdutosComponent } from './lista-lojas/delivery-produtos/delivery-produtos.component';
import { ListaLojasComponent } from './lista-lojas/lista-lojas.component';
import { LojasComponent } from './lojas.component';
import { LojasRouting } from './lojas.routing';

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
