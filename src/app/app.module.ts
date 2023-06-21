import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { HomeComponent } from './home/home.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateAccountHolderComponent } from './create-account-holder/create-account-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBankComponent,
    HomeComponent,
    CreateAdminComponent,
    CreateAccountHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
