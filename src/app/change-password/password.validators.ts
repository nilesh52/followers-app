import { AbstractControl } from '../../../node_modules/@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234') {
                resolve({ inValidOldPassword: true });
            } else {
                resolve(null);
            }
        });
    }

    static passwordShouldMatch(control: AbstractControl) {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
           return {passwordShouldMatch: true};
        } else {
          return null;
        }
      }
}
