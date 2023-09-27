import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BlogService, ContadorCarrinhoService } from '@nx-org/services';

@Component({
  selector: 'nx-org-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private blogService = inject(BlogService);
  private ContadorCarrinhoService = inject(ContadorCarrinhoService);
  private router = inject(Router);
  imagem: any;
  teste: any;
  quantidade = 0;
  rotaAtual: string;
  exibirCarrinho!: boolean;
  selectedProduct: any;

  constructor() {
    this.getActiveRoute();
  }

  ngOnInit() {
    this.getPosts();
    this.ContadorCarrinhoService.quantidade$.subscribe((quantidade) => {
      this.quantidade = quantidade;
    });
  }

  getActiveRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rotaAtual = event.url;
        this.exibirCarrinho =
          this.rotaAtual.includes('delivery') ||
          this.rotaAtual.includes('carrinho');
      }
    });
  }
  getPosts() {
    this.blogService.getBlogPost().subscribe((res: any) => {
      const dados = res;
      this.imagem = dados[0].avatar;
    });
  }
}
