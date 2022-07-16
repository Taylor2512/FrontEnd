import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { urlFront } from './Shared/routes/routes.front';

const routes: Routes = [
{ path: urlFront.login, loadChildren: () => import('./modules/login/modulo/login.module').then(m => m.LoginModule) },
 { path: urlFront.menu, loadChildren: () => import('./modules/menu/modulo/menu.module').then(m => m.MenuModule) },
 {path:'',redirectTo:urlFront.menu,pathMatch:'full'},
 {path:'**',redirectTo:urlFront.menu,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
