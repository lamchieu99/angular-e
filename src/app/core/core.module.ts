import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
