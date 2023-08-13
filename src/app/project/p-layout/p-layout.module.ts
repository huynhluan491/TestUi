import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { FooterComponent } from './components/footer/footer.component';
import { PLayoutRoutingModule } from './p-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesModule } from '../p-pages/pages.module';



@NgModule({
  declarations: [
    LayoutDefaultComponent,
    FooterComponent,
    LandingLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PLayoutRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class PLayoutModule { }
