import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LayoutDefaultComponent,
    loadChildren: () =>  import('../p-pages/pages.module').then((m) => m.PagesModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PLayoutRoutingModule { }