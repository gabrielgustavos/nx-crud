import { FormControl } from '@angular/forms';

export function phoneNumberValidator(
  control: FormControl
): { [key: string]: any } | null {
  const phoneNumberPattern =
    /^(?:(?:\+55|55|0)[\s.-]?[1-9][0-9]?[\s.-]?)?(?:(?:\(\d{2}\)[\s.-]?\d{4,5}[\s.-]?\d{4})|(?:\d{4,5}[\s.-]?\d{4}))$/;

  const phoneNumber = control.value;

  if (phoneNumberPattern.test(phoneNumber)) {
    return null;
  }

  return { invalidPhoneNumber: true };
}
