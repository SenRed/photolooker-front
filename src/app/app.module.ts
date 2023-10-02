import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FileZoneComponent } from './filezone/file-zone.component';
import { UploadComponent } from './upload/upload.component';
import {NgxFileDropModule} from "ngx-file-drop";



@NgModule({
  declarations: [
    AppComponent,
    PseudoComponent,
    FileZoneComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
