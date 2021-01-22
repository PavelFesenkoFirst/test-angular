import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';


import {FirstPageComponent} from './first-page/first-page.component';
import {LastPageComponent} from './last-page/last-page.component';
import {MainWindowComponent} from './main-window/main-window.component';
import {InfoWindowComponent} from './info-window/info-window.component';
import {FormFirstComponent} from './first-form/form-first.component';
import {SecondFormComponent} from './second-form/second-form.component';
import {SecondPageComponent} from './socond-page/second-page.component';
import {SecondMainComponent} from './second-main/second-main.component';
import {ModalComponent} from './modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LastPageComponent,
    MainWindowComponent,
    InfoWindowComponent,
    FormFirstComponent,
    SecondFormComponent,
    SecondPageComponent,
    SecondMainComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
