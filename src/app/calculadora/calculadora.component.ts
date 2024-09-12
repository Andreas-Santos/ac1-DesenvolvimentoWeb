import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  n1: number = 0;
  n2: number = 0;
  op: string = '';
  resultado: number | string = '';

  calcular(): void {
    switch (this.op) {
      case '+':
        this.resultado = this.n1 + this.n2;
        break;
      case '-':
        this.resultado = this.n1 - this.n2;
        break;
      case '/':
        this.resultado = this.n1 / this.n2;
        break;
      case '*':
        this.resultado = this.n1 * this.n2;
        break;
      default:
        this.resultado = 'A operação digitada não é válida';
    }
  }
}