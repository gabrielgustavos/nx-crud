import { Component } from '@angular/core';

@Component({
  selector: 'nx-org-admin',
  template: `
<nx-org-header></nx-org-header>
  <div class="pl-2 pr-2">
  <router-outlet></router-outlet>
  </div>`
})

export class AdminComponent {
}
