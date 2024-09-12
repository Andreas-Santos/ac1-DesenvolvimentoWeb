import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  af: number = 0;
  ag: number = 0;
  resultado: string = '';

  calcularMedia(): void {
    const media = (this.ac1 * 0.15) + (this.ac2 * 0.3) + (this.af * 0.45) + (this.af * 0.1);

    if(media >= 5) {
      this.resultado = 'Aprovado (Nota ' + media.toFixed(2) + ')';
    }
    else {
      this.resultado = 'Reprovado (Nota ' + media.toFixed(2) + ')';
    }
  }
}
