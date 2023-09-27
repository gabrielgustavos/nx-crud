import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContadorCarrinhoService {
  private quantidadeSubject = new BehaviorSubject<number>(0);
  quantidade$ = this.quantidadeSubject.asObservable();

  incrementarQuantidade() {
    const quantidadeAtual = this.quantidadeSubject.value;
    this.quantidadeSubject.next(quantidadeAtual + 1);
  }
}
