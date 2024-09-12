import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class IMCComponent {
  peso: number = 0;
  altura: number = 0;
  resultado: string = '';

  calcularIMC(): void {
    const imc = this.peso / (this.altura * this.altura)

    if(imc < 18.5) {
      this.resultado = 'Seu IMC é de ' + imc.toFixed(1) + ' portanto você está classificado como ABAIXO DO PESO';
    }
    else if(imc >= 18.5 && imc < 25) {
      this.resultado = 'Seu IMC é de ' + imc.toFixed(1) + ' portanto você está classificado como PESO NORMAL';
    }
    else if(imc >= 25 && imc < 30) {
      this.resultado = 'Seu IMC é de ' + imc.toFixed(1) + ' portanto você está classificado como SOBREPESO';
    }
    else if(imc >= 30 && imc < 35) {
      this.resultado = 'Seu IMC é de ' + imc.toFixed(1) + ' portanto você está classificado como OBESIDADE GRAU I';
    }
    else if(imc >= 35 && imc < 40) {
      this.resultado = 'Seu IMC é de ' + imc.toFixed(1) + ' portanto você está classificado como OBESIDADE GRAU II';
    }
    else if(imc >= 40) {
      this.resultado = 'Seu IMC é de ' + imc.toFixed(1) + ' portanto você está classificado como OBESIDADE GRAU III';
    }
  }
}
