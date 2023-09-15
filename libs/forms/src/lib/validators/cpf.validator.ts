import { FormControl } from '@angular/forms';

export function cpfValidator(
  control: FormControl
): { [key: string]: any } | null {
  const cpf = control.value.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) {
    return { cpfInvalido: true };
  }

  const cpfArray = cpf.split('').map((el: string) => +el);

  const rest = (count: number): number => {
    return (
      ((cpfArray
        .slice(0, count - 1)
        .reduce(
          (soma: number, el: number, index: number) =>
            soma + el * (count - index),
          0
        ) *
        10) %
        11) %
      10
    );
  };

  if (rest(10) !== cpfArray[9] || rest(11) !== cpfArray[10]) {
    return { cpfInvalido: true };
  }

  return null;
}
