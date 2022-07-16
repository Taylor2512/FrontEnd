import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../component/login.component';
import { BaseFormLogin } from '../model/BaseFormLogin';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';


@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    LoginRoutingModule,

  ],
  providers:[BaseFormLogin]
})
export class LoginModule { }
