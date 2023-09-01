import { ElementRef, ViewChild, inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ClientModel, ResponseModel } from '@nx-org/interfaces';
import { ClientService, ExcelService } from '@nx-org/services';

@Component({
  selector: 'nx-org-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})


export class ClientsListComponent implements OnInit {
  dataSource: any
  @ViewChild('TABLE', { static: true }) table: ElementRef;

  displayedColumns: string[] = ['nome', 'email', 'telefone', 'funcao', 'linguagem', 'acoes'];
  private clientService = inject(ClientService)
  private excelService = inject(ExcelService)
  constructor() { }

  ngOnInit() {
    this.getClients()
  }

  getClients() {
    this.clientService.getClient().subscribe((data: ResponseModel<ClientModel[]>) => {
      this.dataSource = data
    })
  }

  exportTable() {
    this.excelService.exportAsExcelFile(this.dataSource, 'sample');
  }


}
