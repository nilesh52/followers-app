import { PasswordValidators } from './password.validators';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: PasswordValidators.passwordShouldMatch
    });
  }

  get oldPassword() { return this.form.get('oldPassword'); }
  get newPassword() { return this.form.get('newPassword'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

}
