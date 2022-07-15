import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./modules/login/modulo/login.module').then(m => m.LoginModule) },
 { path: 'menu', loadChildren: () => import('./modules/menu/modulo/menu.module').then(m => m.MenuModule) },
 {path:'',redirectTo:'menu',pathMatch:'full'},
 {path:'**',redirectTo:'menu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
