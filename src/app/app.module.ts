import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewcompoComponent } from './newcompo/newcompo.component';
import { FriendsService } from './friends.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    NewcompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
