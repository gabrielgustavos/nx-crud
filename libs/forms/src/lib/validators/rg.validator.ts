import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function RuleRgValidator(controlName: string): ValidatorFn | null {
    return (group: AbstractControl): ValidationErrors | null => {
        let control = group.get(controlName);
        let regex = new RegExp('^[a-zA-Z0-9-.]*$');

        if (control!.value && !regex.test(control!.value)) {
            control!.setErrors({ ruleRgValidator: true })
            return { ruleRgValidator: true };
        } else {
            return null;
        }
    };
}