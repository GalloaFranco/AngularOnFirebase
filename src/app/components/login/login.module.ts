import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginDumbComponent } from '@component/login/login-dumb/login-dumb.component';
import { LoginSmartComponent } from '@component/login/login-smart/login-smart.component';


@NgModule({
  declarations: [
    LoginDumbComponent,
    LoginSmartComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  entryComponents: [
    LoginDumbComponent
  ],
  exports: [
    LoginSmartComponent
  ]
})
export class LoginModule { }
