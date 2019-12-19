import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../services/login/login.service';
import { MatDialogRef } from '@angular/material';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from '../../helpers/animations';
import { Login } from '../../interfaces/login';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  animations: [fadeIn]
})
export class LoginModalComponent implements OnInit {
  faTimes = faTimes;
  loginForm: FormGroup;
  loginError = null;
  loading = false;

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

  executeLogin(loginObj: Login) {
    if (!loginObj) { return; }

    this.setLoadingStatus(true);

    this.logIn(loginObj)
      .then(
        async (response) => {
          // TODO: colocar o código abaixo no metodo registerCredentials
          await this.login$.registerCredentials(response)
            .then(res => { })
            .catch(error => { });
          this.setLoadingStatus(false);
        })
      .catch((error) => {
        this.setLoadingStatus(false);

        if (error.status === 400) {
          this.loginError = {
            hasError: true,
            message: error.error,
          };
        }
      });
  }

  logIn(loginObj: Login): Promise<any> | any {
    return this.autheticate(loginObj);
  }

  autheticate(login: Login): Promise<any> {
    return new Promise((resolve, reject) => {
      this.login$.logIn(login)
        .subscribe(
          (response) => {
            resolve(response)
          },
          (error) => {
            reject(error);
          });
    });
  }

  registerCredentials() {

  }

  setLoadingStatus(status: boolean) {
    this.loading = status;
  }

  get controls(): any {
    return this.loginForm.controls;
  }

  get formValidation(): boolean {
    return this.loginForm.valid;
  }

  get loginControls(): Login {
    return {
      user: this.controls.user.value,
      password: this.controls.password.value,
    };
  }

}
