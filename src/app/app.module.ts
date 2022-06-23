import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { RatesComponent } from './components/rates/rates.component';
import { RateComponent } from './components/rate/rate.component';
import { MainLayputComponent } from './layouts/main-layput/main-layput.component';
import { HeaderComponent } from './components/header/header.component';


const routes:Route[] = [
  {path:'', component:MainLayputComponent, children:[
      {path:'', redirectTo:'rates', pathMatch:'full'},
      {path:'rates', component:RatesComponent, children:[]}
    ]}
]
@NgModule({
  declarations: [
    AppComponent,
    RatesComponent,
    RateComponent,
    MainLayputComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
