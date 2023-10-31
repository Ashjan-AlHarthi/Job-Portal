import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ButtonModule } from 'primeng/button';

import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenubarModule,
    RouterModule,
    CardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
