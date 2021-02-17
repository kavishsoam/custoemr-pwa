import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule } from './sidenav/sidenav.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    SidenavModule
  ],
  exports: [
      HeaderModule,
      SidenavModule,
      FooterModule
  ]
})
export class SharedModule { }