import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { urlFront } from 'src/app/Shared/routes/routes.front';
import { Servicesapp } from 'src/app/Shared/services/position.service';
import { BaseFormLogin } from '../model/BaseFormLogin';
import { LoginService } from '../services/login.service';
import { TokenService } from '../services/Token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorLogin = false;
  load = false;

  constructor(
    public formB: BaseFormLogin, //fORM REACTIVE
   // private router: Router, //ROUTES
    private apiLogin: LoginService, //SERVICELOGIN
    private tokenUser: TokenService, //TOKEN SERVICES
    private servicios:Servicesapp
  ) {}
  ngOnInit() {
  }
 submit() {
    this.errorLogin = false; //SETEO EN FALSO
    this.load = false;
    const users = this.formB.getFormLogin(

    ); //ENVIO LOS DATOS PARA FORMATEAR A UN JSON ESTANDAR
    this.apiLogin.postUserLogin(users)
    .pipe(
      tap(res=>console.log(res))
    )
    .subscribe((res) => {

      this.load = true;
      this.tokenUser.setTokenUsers(res); //SET TOKEN USUARIO
      this.servicios.GetRedirect(urlFront.menu);
    });
  }


}
