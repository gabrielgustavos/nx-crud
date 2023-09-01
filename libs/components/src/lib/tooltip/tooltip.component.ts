import { Component, Input } from "@angular/core";

@Component({
  selector: 'nx-org-tooltip-component',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']

}) export class TooltipComponent {

  @Input() text: string | undefined;

}
