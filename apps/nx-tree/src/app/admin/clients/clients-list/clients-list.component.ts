import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { BaseComponent, InputComponent, ModalRemoverComponent, ModalService } from '@nx-org/components';
import { ClientsFiltroFormGroup } from '@nx-org/forms';
import { ClientModel, ResponseModel } from '@nx-org/interfaces';
import { ClientService, ExcelService } from '@nx-org/services';
import { debounceTime, filter, take } from 'rxjs';
import { CadEditClientsComponent } from './cad-edit-clients/cad-edit-clients.component';

@Component({
  selector: 'nx-org-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})


export class ClientsListComponent extends BaseComponent implements OnInit, AfterViewInit {
  dataSource: any
  @ViewChild('TABLE', { static: true }) table: ElementRef;
  @ViewChild("inputPesquisa") inputPesquisa: InputComponent;
  formFiltro: ClientsFiltroFormGroup;
  displayedColumns: string[] = ['nome', 'email', 'telefone', 'cpf', 'status', 'acoes'];
  private clientService = inject(ClientService)
  private excelService = inject(ExcelService)
  private modalService = inject(ModalService)
  constructor() {
    super()
    this.formFiltro = new ClientsFiltroFormGroup()
  }

  ngOnInit() {
    this.getClients()
  }

  ngAfterViewInit(): void {
    this.getClients()
    this.formFiltro.termo.valueChanges.pipe(debounceTime(150))
      .subscribe(() => {
        this.filterTable()
      })
  }

  getClients() {
    this.clientService.getClient().subscribe((data: ResponseModel<ClientModel[]>) => {
      this.dataSource = data
    })
  }

  filterTable() {
    const termo = this.formFiltro.termo.value.toLowerCase();
    if (!termo) {
      // Se o campo de pesquisa estiver vazio, redefina a tabela para os dados originais.
      this.getClients();
      return;
    }

    this.dataSource = this.dataSource.filter((element: ClientModel) => {
      return (
        element.nome.toLowerCase().includes(termo) ||
        element.cpf.toLowerCase().includes(termo)
      );
    });
  }



  exportTable() {
    this.excelService.exportAsExcelFile(this.dataSource, 'sample');
  }


  removerPerfil(id: any) {
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
        if (data) {
          this.clientService.deleteClient(id)
            .pipe(take(1))
            .subscribe({
              next: (() => this.getClients())
            })
        }
      });
  }

  cadastrarCliente(data: ClientModel[] | null) {
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
