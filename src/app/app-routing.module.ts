import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { IMCComponent } from './imc/imc.component';

const routes: Routes = [
  { path: '', redirectTo: '/calcularMedia', pathMatch: 'full' },
  { path: 'calcularMedia', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'apolice', component: ApoliceComponent },
  { path: 'conversor', component: ConversorTemperaturaComponent },
  { path: 'imc', component: IMCComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
