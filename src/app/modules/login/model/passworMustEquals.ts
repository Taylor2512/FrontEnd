import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const passwordsMustBeEqual: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {
  const newPassword = group.get('contrasena') as FormControl;
  const passwordConfirm = group.get('contrasena_conf') as FormControl;
  return newPassword.value === passwordConfirm.value
    ? null
    : { passwordsMustBeEqual: true };
};
