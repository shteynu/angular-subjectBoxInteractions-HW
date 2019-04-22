import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppS1Component } from './app-s1/app-s1.component';
import { AppS2Component } from './app-s2/app-s2.component';
import { AppS3Component } from './app-s3/app-s3.component';
import { R12Component } from './r12/r12.component';
import { R13Component } from './r13/r13.component';
import { R23Component } from './r23/r23.component';
import {FormsModule} from "@angular/forms";
import {MessageBoxService} from "./message-box.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppS1Component,
    AppS2Component,
    AppS3Component,
    R12Component,
    R13Component,
    R23Component
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule,
  ],
  providers: [MessageBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
