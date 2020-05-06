import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterLayoutComponent } from './register-layout/register-layout.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterLayoutComponent,
    LayoutsComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
