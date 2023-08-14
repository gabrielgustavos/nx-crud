/* eslint-disable */

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
  ViewChild,
} from "@angular/core";
import { NgControl } from "@angular/forms";
import { MaskEnum } from "./mask.enum";
import { FormControlValueAccessor } from "./form-control-value-accessor";
import { debounceTime, distinctUntilChanged, fromEvent, takeUntil } from "rxjs";

@Component({
  selector: "nx-org-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent
  extends FormControlValueAccessor
  implements OnInit, AfterViewInit {
  @ViewChild("input")
  input!: ElementRef;
  floatLabel = false;
  mostrarSenha = false;
  valorInicial!: string;

  @Input() address: boolean = false;

  @Input() textarea: boolean = false;

  @Input() recebeIcone!: string;

  @Input() recebeTextoIcone!: string;

  @Input() label!: string;

  @Input() icone!: string;

  @Input() required!: boolean;

  @Input() autocomplete: string = "";

  @Input() type: string = "text";

  @Input() mask!: string;

  @Input() disabled!: boolean;

  @Input() uppercase!: boolean;

  @Input() maxlength!: number;

  @Input() max: any;

  @Input() minlength!: number;

  @Input() min: any;

  @Input() placeholder!: string;

  @Input() id!: string;

  @Input() decimal: boolean = false;

  @Input() small!: boolean;

  @Input() value!: string;

  @Input() ngModel!: boolean;

  @Input() dropSpecialCharacters!: boolean;

  @Input() cursorPointer!: boolean;

  @Input() bordaCinza!: boolean;

  @Input() bordaAzul!: boolean;

  @Input() placeholderCinza!: boolean;

  @Input()
  options: any = {
    thousands: ".",
    decimal: ",",
    prefix: "",
    align: "left",
    precision: 2,
  };

  @Input() showPassword = false;

  @Input() iconesTextArea: boolean = false;

  @Input() text: string;

  @Output() onSearch = new EventEmitter<string>();

  @Output() onIconClick = new EventEmitter<any>();



  recebeMask: string;
  prefix: string = "";
  thousandSeparator: string = "";
  decimalMarker: string = "";

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
    this.campoPreenchidoFloatLabel()
  }

  ngOnInit(): void {
    this.setupControlAndValidation();
    this.campoPreenchidoFloatLabel()
    this.prefix = "";
    this.thousandSeparator = "";
    this.decimalMarker = "";

    if (this.mask == "telefone") {
      this.recebeMask = MaskEnum.telefone;
    } else if (this.mask == "cpf") {
      this.recebeMask = MaskEnum.cpf;
    } else if (this.mask == "cnpj") {
      this.recebeMask = MaskEnum.cnpj;
    } else if (this.mask == "cep") {
      this.recebeMask = MaskEnum.cep;
    } else if (this.mask == "cfop") {
      this.recebeMask = MaskEnum.cfop;
    } else if (this.mask == "ncm") {
      this.recebeMask = MaskEnum.ncm;
    } else if (this.mask == "number") {
      this.recebeMask = MaskEnum.number;
    } else if (this.mask == "uf") {
      this.recebeMask = MaskEnum.uf;
    } else if (this.mask == "currency") {
      this.recebeMask = MaskEnum.currency;
      this.prefix = "R$";
      this.thousandSeparator = ".";
      this.decimalMarker = ",";
    } else if (this.mask == "ie") {
      this.recebeMask = MaskEnum.ie;
    } else if (this.mask == "iePropRural") {
      this.recebeMask = MaskEnum.iePropRural;
    } else if (this.mask == "chaveNf") {
      this.recebeMask = MaskEnum.chaveNf;
    } else if (this.mask == "rg") {
      this.recebeMask = MaskEnum.rg;
    } else if (this.mask == "cpfCnpj") {
      this.recebeMask = MaskEnum.cpfCnpj;
    } else if (this.mask == "data") {
      this.recebeMask = MaskEnum.data;
    } else if (this.mask == "porcentagem") {
      this.recebeMask = MaskEnum.porcentagem;
    } else if (this.mask == "horario") {
      this.recebeMask = MaskEnum.horario;
    }

    this.placeholder == undefined ? (this.placeholder = "") : null;
  }

  ngAfterViewInit(): void {
    this.search();

  }

  search(): void {
    fromEvent(this.input.nativeElement, "keyup")
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
        takeUntil(this.destroyed$)
      )
      .subscribe((event: any) => {
        const value = (<HTMLInputElement>event.target).value;
        this.onSearch.emit(value);
      });
  }

  clickIcon(): void {
    this.onIconClick.emit();
  }

  notifyOnChange(obj: any): void { }

  setRequired(required: boolean): void {
    this.required = required;
  }

  getValue(): any {
    return this.control.value;
  }

  isRequired(): boolean {
    return this.required;
  }

  disable(): void { }

  hasFloatLabel(Event: Event): void {
    const value = (<HTMLInputElement>Event.target).value;
    if (!!value) {
      this.floatLabel = true;
    } else {
      this.floatLabel = false;
    }
  }

  campoPreenchidoFloatLabel() {
    this.control.valueChanges.subscribe((value) => {
      if (!!value || value >= 0) {
        this.floatLabel = true;

      } else {
        this.floatLabel = false;
      }
    })
  }
}


