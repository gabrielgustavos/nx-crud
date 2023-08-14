import { Component } from '@angular/core';

@Component({
  selector: 'nx-org-root',
  template: `
    <nx-org-banner title="Welcome to our admin app."> </nx-org-banner>
  `, styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
}
