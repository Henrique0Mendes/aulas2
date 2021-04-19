import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ClinicaVeterinariaComponent } from './components/clinica-veterinaria/clinica-veterinaria.component';
import { EvAndRefComponent } from './components/ev-and-ref/ev-and-ref.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Calculator",component:CalculatorComponent},
  {path:"EvAndRef",component:EvAndRefComponent},
  {path:"Clinica",component:ClinicaVeterinariaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
