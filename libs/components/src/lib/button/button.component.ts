import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-org-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() iconeEsquerda = false;
  @Input() texto!: string;
  @Input() icone!: string;
  @Input() btnSecondary?: boolean;
  @Input() btnDanger?: boolean;
  @Input() transparent!: boolean;
  @Input() btnWaring?: boolean;
  @Input() small?: boolean;
  @Input() disabled!: boolean;
  @Input() onlyIcon!: boolean;
  @Input() title = "";
  @Input() larguraMaxima = false;

  @Input() dropButton?: boolean = false;
  isOpen = false;

  @Input() listButtons?: any[];

  onToogle() {
    this.isOpen = !this.isOpen;
  }
}
