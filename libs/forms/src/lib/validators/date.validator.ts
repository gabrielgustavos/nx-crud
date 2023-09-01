import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from "moment";

export class CustomValidators {
  static dateMinimum(date: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      
      if (!control.value) {
        return {
          'date-minimum': true
        };
      }
      
      const momentBr = moment(new Date(new Date(control.value).getTime() + (new Date(control.value).getTimezoneOffset() * 60000)));

      if (!moment(control.value).isValid()) {
        return null;
      }

      const validationDate = moment(new Date(new Date(date).getTime() + (new Date(date).getTimezoneOffset() * 60000)));

      return momentBr.isAfter(validationDate) || momentBr.isSame(validationDate) ? null : {
        'date-minimum': {
          'date-minimum': validationDate.format('DD/MM/yyyy'),
          'actual': momentBr.format('DD/MM/yyyy')
        }
      };
    };
  }
}