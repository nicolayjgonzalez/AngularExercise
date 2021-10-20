import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiPageComponent } from './components/api-page/api-page.component';
import { HeaderComponent } from './components/header/header.component';
import { InputPageComponent } from './components/input-page/input-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPageComponent,
    InputPageComponent,
    ApiPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
