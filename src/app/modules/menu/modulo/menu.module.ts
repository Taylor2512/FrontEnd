import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from '../component/menu.component';
import { NavcarComponent } from 'src/app/Shared/navcar/navcar.component';


@NgModule({
  declarations: [
    MenuComponent,
    NavcarComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
