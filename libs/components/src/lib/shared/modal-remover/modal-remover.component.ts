import { DIALOG_DATA, DialogRef } from '@nx-org/components';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'nx-org-modal-remover',
  templateUrl: './modal-remover.component.html',
  styleUrls: ['./modal-remover.component.scss']
})
export class ModalRemoverComponent implements OnInit {

  constructor(
    @Inject(DIALOG_DATA) public data: { titulo: string, mensagem: string },
    private dialogRef: DialogRef
  ) { }

  ngOnInit() {
  }

  fechar() {
    this.dialogRef.close(false);
  }

  salvar() {
    this.dialogRef.close(true);
  }
}
