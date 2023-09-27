// carrinho.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosCarrinhoService {
  private produtosNoCarrinho: any[] = [];
  private produtosSubject = new BehaviorSubject<any[]>([]);

  produtos$ = this.produtosSubject.asObservable();

  adicionarProdutoAoCarrinho(produto: any) {
    this.produtosNoCarrinho.push(produto);
    this.produtosSubject.next(this.produtosNoCarrinho);
  }

  obterProdutosNoCarrinho() {
    return this.produtosNoCarrinho;
  }

  limparCarrinho() {
    this.produtosNoCarrinho = [];
    this.produtosSubject.next(this.produtosNoCarrinho);
  }
}
