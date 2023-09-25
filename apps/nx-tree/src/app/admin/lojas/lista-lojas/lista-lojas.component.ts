import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MercadosModel, ResponseModel } from '@nx-org/interfaces';
import { MercadosService } from '@nx-org/services';

@Component({
  selector: 'nx-org-lista-lojas',
  templateUrl: './lista-lojas.component.html',
  styleUrls: ['./lista-lojas.component.scss'],
})
export class ListaLojasComponent implements OnInit {
  private mercadosService = inject(MercadosService);
  route = inject(Router);
  dataSource: any;
  constructor() {}

  ngOnInit() {
    this.getClients();
  }

  abrirDelivery(id: any) {
    this.route.navigate(['lojas/delivery', id]);
  }

  getClients() {
    this.mercadosService
      .getClient()
      .subscribe((data: ResponseModel<MercadosModel[]>) => {
        this.dataSource = data;
      });
  }
}
