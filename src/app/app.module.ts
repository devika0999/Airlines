import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirlineslistComponent } from './airlineslist/airlineslist.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { PassengerComponent } from './passenger/passenger.component'

const appRoutes:Routes=[
  {
    path:"",component:AirlineslistComponent
  },
  {
    path:"view",component:PassengerComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AirlineslistComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
