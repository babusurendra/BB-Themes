import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/bbv1-theme/home.component';
import { LeadsComponent } from './leads/leads.component';
import { SalesComponent } from './sales/sales.component';
import { MarketComponent } from './market/market.component';

import {routing} from './app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
//import { Bbv2ThemeComponent } from './home/bbv2-theme/bbv2-theme.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeadsComponent,
    SalesComponent,
    MarketComponent,
    WelcomeComponent,
    //Bbv2ThemeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
