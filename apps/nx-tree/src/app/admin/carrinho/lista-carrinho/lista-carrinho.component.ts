import { Component, OnInit, inject } from '@angular/core';
import { ProdutosCarrinhoService } from '@nx-org/services';

@Component({
  selector: 'nx-org-lista-carrinho',
  templateUrl: './lista-carrinho.component.html',
  styleUrls: ['./lista-carrinho.component.scss'],
})
export class ListaCarrinhoComponent implements OnInit {
  private produtosCarrinhoService = inject(ProdutosCarrinhoService);
  produtosNoCarrinho: any;
  constructor() {}

  ngOnInit() {
    this.produtosNoCarrinho =
      this.produtosCarrinhoService.obterProdutosNoCarrinho();
  }
}
