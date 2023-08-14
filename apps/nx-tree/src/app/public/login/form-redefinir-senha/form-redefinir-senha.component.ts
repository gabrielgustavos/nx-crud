import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-org-form-redefinir-senha',
  templateUrl: './form-redefinir-senha.component.html',
  styleUrls: ['./form-redefinir-senha.component.scss'],
})
export class FormRedefinirSenhaComponent implements OnInit {
  emailEnviado = false;
  constructor() { }

  ngOnInit() { }
  enviarEmail() {
    this.emailEnviado = true;
  }
}
