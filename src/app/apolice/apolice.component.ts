import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valor: number = 0;
  resultado: number | string = '';

  calcularApolice(): void {
    switch (this.sexo) {
      case 'masculino':
      case 'Masculino':
      case 'MASCULINO':
        if(this.idade <= 25) {
          this.resultado = this.valor * 0.15;
        }
        else {
          this.resultado = this.valor * 0.10;
        }
        break;
      case 'feminino':
      case 'Feminino':
      case 'FEMININO':
        this.resultado = this.valor * 0.08;
        break;
      default:
        this.resultado = 'O sexo digitado não é válido';
    }
  }
}
