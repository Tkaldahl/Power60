import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountPage } from './accounts-plugin/pages/create-account/create-account.page';


const routes: Routes = [
  {
    path: 'create-account',
    component: CreateAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
