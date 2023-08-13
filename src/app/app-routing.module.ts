import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './project/p-pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./project/p-layout/p-layout.module').then((m) => m.PLayoutModule),
  }
  ,{
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
