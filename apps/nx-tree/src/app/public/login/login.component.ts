import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-org-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  bgImage = 'assets/images/ilustrations/login.avif';
  footerTxt = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.alterarImagem();
  }

  alterarImagem(): void {
    this.router.events.subscribe((event: any) => {
      const url = event?.routerEvent?.url;

      const loginUrl = '/login';
      const esqueciSenhaUrl = '/login/esqueci-senha';
      const criarSenhaUrl = '/login/criar-senha';
      const redefinirSenhaUrl = '/login/redefinir-senha';
      switch (url) {
        case loginUrl:
          this.bgImage = 'assets/images/ilustrations/login.avif';
          this.footerTxt =
            'Tudo o que você precisa saber sobre o  mundo jurídico em um só lugar!';
          break;

        case esqueciSenhaUrl:
          this.bgImage = 'assets/images/ilustrations/esqueci-senha.avif';
          this.footerTxt = 'Fique tranquilo (a), vamos resetar sua senha!';
          break;

        case criarSenhaUrl:
          this.bgImage = 'assets/images/ilustrations/criar-senha.avif';
          this.footerTxt = 'Oba, vamos cadastrar uma senha de acesso!';
          break;

        case redefinirSenhaUrl:
          this.bgImage = 'assets/images/ilustrations/redefinir-senha.avif';
          this.footerTxt = 'Fique tranquilo (a), vamos resetar sua senha!';
          break;

        default:
          this.bgImage = 'assets/images/ilustrations/login.avif';
          this.footerTxt =
            'Tudo o que você precisa saber sobre o  mundo jurídico em um só lugar!';
          break;
      }
    });
  }
}
