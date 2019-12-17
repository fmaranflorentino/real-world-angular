import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../services/login/login.service';
import { MatDialogRef } from '@angular/material';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from '../../helpers/animations';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  animations: [fadeIn]
})
export class LoginModalComponent implements OnInit {
  faTimes = faTimes;
  loginForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<any>,
    private login$: LoginService,
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = new FormGroup({
      user: new FormControl(null, { validators: Validators.required }),
      password: new FormControl(null, { validators: Validators.required }),
    });
  }

  errorsHandler(control) {
    return (this.controls[control].errors &&
      this.controls[control].errors.required) &&
      this.controls[control].touched;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  logIn(loginObj): Promise<any> | any {
    if (!loginObj) { return; }
    console.log(loginObj);
    return this.autheticate();
  }

  autheticate(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.login$.logIn()
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          });
    });
  }

  get controls(): any {
    return this.loginForm.controls;
  }

  get formValidation(): boolean {
    return this.loginForm.valid;
  }

  get loginControls() {
    return {
      user: this.controls.user.value,
      password: this.controls.password.value,
     };
  }

}
