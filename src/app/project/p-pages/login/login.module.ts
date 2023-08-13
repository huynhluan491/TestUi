import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { LoginComponent } from './login.component';
import { PLayoutModule } from '../../p-layout/p-layout.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PLayoutModule,
    LoginRoutingModule
  ],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
})
export class LoginModule { }
