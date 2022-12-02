import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  calcInput: string = '';
  calcResult: string = '';

  btnPressed(x: any) {
    const target = x.target as HTMLElement;
    switch (target.innerText) {
      case 'Clear':
        this.calcInput = '';
        this.calcResult = '';
        break;
      case '=':
        try {
          this.calcResult = math.evaluate(this.calcInput);
        } catch (error) {
          this.calcResult = 'error';
        }
        break;
      default:
        this.calcInput += target.innerText;
        break;
    }
  }
}
