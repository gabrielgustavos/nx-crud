import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-org-banner',
  template: `<header>{{ title }}</header>`,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() title = '';

}
