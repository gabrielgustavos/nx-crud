import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ConfirmPasswordValidator(controlName: string, matchingControlName: string): ValidatorFn | null {
  return (group: AbstractControl): ValidationErrors | null => {

    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);

    if (matchingControl?.errors && !matchingControl?.errors?.['confirmPasswordValidator']) {
      return null;
    }

    if (control?.value !== matchingControl?.value) {
      matchingControl?.setErrors({ confirmPasswordValidator: true })
      return { confirmPasswordValidator: true };
    } else {
      matchingControl?.setErrors(null)
      return null;
    }
  };
}

export function ChangePasswordValidator(controlName: string, matchingNewControlName: string, matchingConfirmControlName: string): ValidatorFn | null {
  return (group: AbstractControl): ValidationErrors | null => {

    const control = group.get(controlName);
    const matchingNewControl = group.get(matchingNewControlName);
    const matchingConfirmControl = group.get(matchingConfirmControlName);

    if (control?.value === "" && (matchingNewControl?.value !== "" || matchingConfirmControl?.value !== "")) {
      control.setErrors({ changePasswordValidator: true })
      return { changePasswordValidator: true };
    } else {
      control?.setErrors(null);
      return null;
    }
  };
}

export function RulePasswordValidator(controlName: string): ValidatorFn | null {
  return (group: AbstractControl): ValidationErrors | null => {
    const control = group.get(controlName);
    const regex = new RegExp(/.*(?=.{6,12})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[&"'(\-_)=~#{[|`\\^@\]}^$*¨£µ%,;:!?./§+]).*/);

    if (control?.value && !regex.test(control?.value)) {
      control?.setErrors({ rulePasswordValidator: true })
      return { rulePasswordValidator: true };
    } else {
      return null;
    }
  };
}
