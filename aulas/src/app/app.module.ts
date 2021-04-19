import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HomeComponent,
    NavBarComponent,
    EvAndRefComponent,
    ClinicaVeterinariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
