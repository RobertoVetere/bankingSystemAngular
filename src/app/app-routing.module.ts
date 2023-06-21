import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { HomeComponent } from './home/home.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateAccountHolderComponent } from './create-account-holder/create-account-holder.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-bank', component: CreateBankComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: 'create-account-holder', component: CreateAccountHolderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }