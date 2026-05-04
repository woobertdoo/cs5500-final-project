import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export const confirmEmailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const error = control.value.email === control.value.confirmEmail ? null : { EmailNoMatch: true }
  control.setErrors(error);
  console.log(error);
  return error;
};
