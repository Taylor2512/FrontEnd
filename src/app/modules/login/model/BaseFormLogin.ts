import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/Shared/validations/expresionRegular';
import { passwordsMustBeEqual } from './passworMustEquals';


@Injectable({ providedIn: 'root' })
export class BaseFormLogin {
  constructor(private formB: FormBuilder) {}
  //REGISTRAR USUARIO
  registerUser = this.formB.group(
    {
      id: [''],
      email: ['', [Validators.required, Validators.email]],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(Expresion.Contrasena),
        ],
      ],
      contrasena_conf: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(Expresion.Contrasena),
        ],
      ],
    },
    { validator: passwordsMustBeEqual }
  );
  //FORM LOGIN
  loginUser = this.formB.group({
    email: ['',
    // [Validators.required]
  ],
    password: [
      '',
      // [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
    ],
  });
  //BUSAR USUARIO
  buscarUser = this.formB.group({
    user: ['', [Validators.required, Validators.email]],
  });
  //CAMBIAR CONTRASENA
  passwordReset = this.formB.group(
    {
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(Expresion.Contrasena),
        ],
      ],
      contrasena_conf: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
        ],
      ],
    },
    { validator: passwordsMustBeEqual }
  );
  limpiarForm() {
    this.registerUser.reset();
    this.loginUser.reset();
  }
  //FORM LOGIN UsER
  getFormLogin() {
    return {
      Email: this.loginUser.value.email,
      Password: this.loginUser.value.password,

    };
  }
  //Data form login
  getDataRegisterUser(latitud?: any, longitud?: any) {
    return {
      user: this.registerUser.value.email,
      pass: this.registerUser.value.contrasena,
      latitud,
      longitud,
    };
  }
  getSearchUser(latitud?: any, longitud?: any) {
    return {
      user: this.buscarUser.value.user,
      latitud,
      longitud,
    };
  }
  getPasswordReset(codigo: any, latitud?: any, longitud?: any) {
    return {
      codigo_recuperacion: codigo,
      pass: this.passwordReset.value.contrasena,
      latitud,
      longitud,
    };
  }
}
