import { Component, Input, OnChanges, OnDestroy, OnInit, Optional, Output, Self, SimpleChanges } from "@angular/core";
import { NgControl } from "@angular/forms";
import { FormControlValueAccessor } from "./form-control-value-accessor";

@Component({
  selector: 'nx-org-toggle-button',
  templateUrl: 'toggle.component.html',
  styleUrls: ['toggle.component.scss'],
})
export class ToggleComponent extends FormControlValueAccessor implements OnInit, OnDestroy, OnChanges {

  @Input() disabled = false;
  @Input() toggleId!: string;
  @Input() toggleChecked = false;
  @Input() value: any = '';
  @Input() ngModel = false;

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {
    this.setupControlAndValidation();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["disabled"]) {
      if (this.disabled) this.control.disable();
      else this.control.enable();
    }
  }


  toggleChange(event: any): void {
    this.value = event.target.checked;
  }

  notifyOnChange(obj: any): void { }

  setRequired(required: boolean): void { }

  getValue(): any {
    return this.control.value;
  }

  isRequired(): boolean {
    return false;
  }

}
