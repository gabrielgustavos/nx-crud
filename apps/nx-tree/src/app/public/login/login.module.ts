import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertService, ButtonModule, InputModule } from '@nx-org/components';
import { AuthService } from '@nx-org/services';
import { NgModule } from '@angular/core';

import { FormLoginComponent } from './form-login/form-login.component';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import {
  SocialLoginModule,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { FormRegisterComponent } from './form-register/form-register.component';

@NgModule({
  imports: [
    CommonModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule,
    LoginRouting,
    ButtonModule,
    InputModule,
  ],
  exports: [],
  declarations: [LoginComponent, FormLoginComponent, FormRegisterComponent],
  providers: [
    AuthService,
    AlertService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '570737346283-a9f3lk03ne1154972hm6kem8sfhjohv8.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
})
export class LoginModule {}
