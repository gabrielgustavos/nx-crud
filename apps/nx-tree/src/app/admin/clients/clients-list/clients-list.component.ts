import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ModalRemoverComponent, ModalService } from '@nx-org/components';
import { ClientModel, ResponseModel } from '@nx-org/interfaces';
import { ClientService, ExcelService } from '@nx-org/services';
import { filter, take } from 'rxjs';
import { CadEditClientsComponent } from './cad-edit-clients/cad-edit-clients.component';

@Component({
  selector: 'nx-org-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})


export class ClientsListComponent implements OnInit {
  dataSource: any
  @ViewChild('TABLE', { static: true }) table: ElementRef;

  displayedColumns: string[] = ['nome', 'email', 'telefone', 'cpf', 'status', 'acoes'];
  private clientService = inject(ClientService)
  private excelService = inject(ExcelService)
  private modalService = inject(ModalService)
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

  removerPerfil() {
    const modal = this.modalService.open(ModalRemoverComponent, {
      width: '31.21rem',
      clickOutside: true,
      data: { titulo: 'Excluir Pefil de Usuário', mensagem: 'Tem certeza que deseja excluir esse Perfil de Usuário?' }
    });

    modal
      .afterClosed()
      .pipe(
        take(1),
        filter((data) => data != false)
      )
      .subscribe(data => {
        return data
      });
  }

  cadastrarCliente(data: ClientModel[]) {
    const modal = this.modalService.open(CadEditClientsComponent, {
      width: '50rem',
      clickOutside: true,
      data
    });

    modal
      .afterClosed()
      .pipe(
        take(1),
        filter((data) => data != false)
      )
      .subscribe(data => {
        if (data) {
          this.getClients()
        }
      });
  }
}
