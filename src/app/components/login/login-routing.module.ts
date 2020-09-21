import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDumbComponent } from '@component/login/login-dumb/login-dumb.component';


const routes: Routes = [
  {
    path: '',
    component: LoginDumbComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
