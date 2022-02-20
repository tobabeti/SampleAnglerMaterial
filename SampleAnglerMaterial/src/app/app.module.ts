import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { ScreenHomeComponent } from './screen/screen-home/screen-home.component';
import { ScreenAComponent } from './screen/screen-a/screen-a.component';
import { ScreenBComponent } from './screen/screen-b/screen-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ScreenHomeComponent,
    ScreenAComponent,
    ScreenBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
