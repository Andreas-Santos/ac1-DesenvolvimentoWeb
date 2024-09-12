import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {
  temp: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;

  calcularTemp(): void {
    this.fahrenheit = (this.temp * 9 / 5) + 32;
    this.kelvin = (this.temp + 273.15)
  }
}
