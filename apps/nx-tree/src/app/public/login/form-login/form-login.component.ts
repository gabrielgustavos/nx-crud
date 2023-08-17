import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AlertService } from '@nx-org/components';
import { AuthService } from '@nx-org/services';
import { LoginFormGroup } from '@nx-org/forms';

@Component({
  selector: 'nx-org-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  form: LoginFormGroup;

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {
    this.form = new LoginFormGroup();
  }

  ngOnInit() {
    this.checkGoogleAuthStatus();
  }

  login() {
    if (this.form.valid) {
      const { email, senha } = this.form.value;

      this.authService.checkCredentials(email, senha).subscribe((isValid) => {
        if (isValid) {
          this.router.navigate(['clients']);
        } else {
          this.showLoginError();
        }
      });
    } else {
      this.showLoginError();
      this.form.markAllAsTouched();
    }
  }

  checkGoogleAuthStatus() {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['clients']);
      }
    });
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.router.navigate(['clients']);
    });
  }

  register() {
    this.router.navigate(['./register']);
  }

  private showLoginError() {
    this.alertService.show({
      title: 'Erro!',
      subtitle: 'Erro ao logar',
      status: 'erro'
    });
  }
}
