import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { RatesComponent } from './components/rates/rates.component';
import { RateComponent } from './components/rate/rate.component';

@NgModule({
  declarations: [
    AppComponent,
    RatesComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
