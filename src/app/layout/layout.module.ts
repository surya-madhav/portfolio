import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';



@NgModule({
  declarations: [HeaderComponent, BodyComponent, SidenavComponent],
  imports: [
    CommonModule, MatSidenavModule ,MatIconModule ,MatButtonModule ,LayoutModule
  ],
  exports: [
    HeaderComponent ,BodyComponent ,SidenavComponent
  ]
})
export class PortfolioLayoutModule { }
