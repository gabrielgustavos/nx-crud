import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadosService } from '@nx-org/services';

@Component({
  selector: 'nx-org-delivery-produtos',
  templateUrl: './delivery-produtos.component.html',
  styleUrls: ['./delivery-produtos.component.scss'],
})
export class DeliveryProdutosComponent implements OnInit {
  route = inject(ActivatedRoute);
  mercadosService = inject(MercadosService);
  id: any;
  dataSource: any;
  constructor() {}

  ngOnInit() {
    this.getDelivery();
  }

  getDelivery() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.mercadosService.getDelivery(this.id).subscribe((data: any) => {
      this.dataSource = data;
    });
  }
}
