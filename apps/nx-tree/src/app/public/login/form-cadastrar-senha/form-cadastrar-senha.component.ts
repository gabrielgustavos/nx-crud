import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-org
  templateUrl: './form-cadastrar-senha.component.html',
  styleUrls: ['./form-cadastrar-senha.component.scss'],
})
export class FormCadastrarSenhaComponent implements OnInit {
  emailEnviado = false;
  constructor() { }

  ngOnInit() { }
  enviarEmail() {
    this.emailEnviado = true;
  }
}
