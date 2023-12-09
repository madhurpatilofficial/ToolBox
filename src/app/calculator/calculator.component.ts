import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeScript, SafeStyle, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import * as math from 'mathjs';

interface CalculatorButton {
  label: string;
  value: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = '';
  currentInput: string = '';

  calculatorButtons: CalculatorButton[] = [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '/', value: '/' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '*', value: '*' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '-', value: '-' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
    { label: '+', value: '+' },
    { label: 'sin', value: 'sin(' },
    { label: 'cos', value: 'cos(' },
    { label: 'tan', value: 'tan(' },
    { label: 'C', value: 'C' }
  ];
  

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  handleButtonClick(value: string): void {
    if (value === '=') {
      this.calculateResult();
    } else if (value === 'C') {
      this.clear();
    } else {
      this.currentInput += this.processValue(value);
    }
  }

  processValue(value: string): string {
    switch (value) {
      case 'sin':
      case 'cos':
      case 'tan':
        return `${value}(`;
      default:
        return value;
    }
  }

  calculateResult(): void {
    try {
      // Replace trigonometric functions with mathjs equivalents
      const sanitizedInput = this.currentInput
        .replace(/sin/g, 'math.sin')
        .replace(/cos/g, 'math.cos')
        .replace(/tan/g, 'math.tan');

      const result = math.evaluate(sanitizedInput);

      if (!isNaN(result)) {
        this.result = result.toString();
      } else {
        this.result = 'Error';
      }
    } catch (error) {
      this.result = 'Error';
    }
  }

  clear(): void {
    this.result = '';
    this.currentInput = '';
  }
}
