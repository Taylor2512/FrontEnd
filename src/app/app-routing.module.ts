import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'login', loadChildren: () => import('./login/component/component.module').then(m => m.ComponentModule) },
 { path: 'menu', loadChildren: () => import('./menu/component/component.module').then(m => m.ComponentModule) },
 {path:'',redirectTo:'menu',pathMatch:'full'},
 {path:'**',redirectTo:'menu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
