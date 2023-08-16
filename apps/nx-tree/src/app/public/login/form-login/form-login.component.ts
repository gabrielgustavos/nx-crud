import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '@nx-org/components';
import { LoginFormGroup } from '@nx-org/forms';
import { AuthService } from '@nx-org/services';
import { take } from 'rxjs';
import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'nx-org-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  loading: boolean;
  form: LoginFormGroup
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {
    this.form = new LoginFormGroup()
  }

  ngOnInit() {
    this.checkGoogleAuthStatus()
  }

  login() {
    const { value, valid } = this.form;

    if (valid) {
      this.loading = true;

      this.authService.login(value)
        .pipe(take(1))
        .subscribe({
          next: data => {
            console.log(data);
          },
          complete: () => {
            this.loading = false;
            this.router.navigate(['clients'])
          }
        });
    } else {
      this.alertService.show({
        title: 'Erro!',
        subtitle: 'Erro ao logar',
        status: 'erro'
      });
    }
  }

  checkGoogleAuthStatus() {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) this.router.navigate(['clients'])
    });
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['clients']))
  }



}
