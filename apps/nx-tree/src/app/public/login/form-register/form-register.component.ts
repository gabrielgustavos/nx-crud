import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '@nx-org/components';
import { LoginFormGroup } from '@nx-org/forms';
import { AuthService } from '@nx-org/services';


@Component({
  selector: 'nx-org-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  form: LoginFormGroup
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
  ) {
    this.form = new LoginFormGroup()
  }

  ngOnInit() {
  }

  login() {
    const { value, valid } = this.form;
    if (valid) {

      this.authService.postLogin(
        value

      ).subscribe((isValid) => {
        if (isValid) {
          this.router.navigate(['/'])
        }
      });
    } else {
      this.alertService.show({
        title: 'Erro!',
        subtitle: 'Erro ao logar',
        status: 'erro'
      });
      this.form.markAllAsTouched();
    }
  }
}
