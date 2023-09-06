import { Component, Inject, OnInit } from '@angular/core';
import { AlertService, BaseComponent, DIALOG_DATA, DialogRef } from '@nx-org/components';
import { ClientsFormGroup } from '@nx-org/forms';
import { ClientService } from '@nx-org/services';
import { take } from 'rxjs';

@Component({
  selector: 'nx-org-cad-edit-clients',
  templateUrl: './cad-edit-clients.component.html',
  styleUrls: ['./cad-edit-clients.component.scss']
})
export class CadEditClientsComponent extends BaseComponent implements OnInit {
  form: ClientsFormGroup = new ClientsFormGroup();
  titulo = '';

  constructor(
    @Inject(DIALOG_DATA) public clientData: any,
    private dialogRef: DialogRef,
    private clientService: ClientService,
    private alertService: AlertService
  ) {
    super();
  }

  ngOnInit() {
    this.form.patchValue(this.clientData);
    if (this.clientData === null) {
      this.titulo = "Cadastro de Cliente";
    } else {
      this.titulo = "Editar CLiente";
      this.form.patchValue(this.clientData);
    }
  }

  fechar() {
    this.dialogRef.close(false);
  }

  salvar() {
    const { valid } = this.form;
    if (valid && this.clientData === null) {
      this.addClient()
    } else {
      this.editClient()
    }
  }

  private addClient() {
    const { value } = this.form;

    this.clientService.postClient(value)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.handleSaveError();
        }
      });
  }

  private editClient() {
    this.clientService.putClient(this.clientData.id, this.form.value)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.handleSaveError();
        }
      });
  }


  private handleSaveError() {
    this.alertService.show({
      title: 'Erro!',
      subtitle: 'Erro ao editar',
      status: 'erro'
    });
  }
}
