import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSmartComponent } from '@component/login/login-smart/login-smart.component';


const routes: Routes = [
  {
    path: '',
    component: LoginSmartComponent
  },
  {
    path: 'login',
    component: LoginSmartComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./components/products/products.module').then(module => module.ProductsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(module => module.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
