import {Routes,RouterModule} from '@angular/router'
import{ModuleWithProviders} from '@angular/core';
import { SalesComponent } from './sales/sales.component';
import { LeadsComponent } from './leads/leads.component';
import {AppComponent} from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes : Routes =[
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'home',redirectTo:'welcome',pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'leads',component:LeadsComponent},
  {path:'sales',component:SalesComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);