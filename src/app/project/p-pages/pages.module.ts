import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PLayoutModule } from '../p-layout/p-layout.module';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [HomeComponent, SignupComponent],
  imports: [
    CommonModule,
    NzModalModule,
    PLayoutModule,
    PagesRoutingModule,
  ],
  exports: [
    HomeComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
})
export class PagesModule { }
