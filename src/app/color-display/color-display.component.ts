// color-display.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent {
  selectedColor: string | null = null;

  normalColors: string[] = ['red', 'green', 'blue', 'black', 'yellow', 'purple', 'cyan', 'magenta', 'orange', 'brown'];
  gradientColors: string[] = ['linear-gradient(90deg, red, blue)', 'linear-gradient(90deg, green, yellow)', 'linear-gradient(90deg, purple, cyan)', 'linear-gradient(90deg, magenta, orange)'];
  colorFormats: { [key: string]: string } = {};

  constructor() {
    // Initialize color formats for normal colors
    this.normalColors.forEach(color => {
      this.getColorFormat(color);
    });

    // Initialize color formats for gradient colors
    this.gradientColors.forEach(color => {
      this.getColorFormat(color, true);
    });
  }

  getColorFormat(color: string, isGradient: boolean = false): void {
    const dummyElement = document.createElement('div');
    dummyElement.style.color = isGradient ? 'initial' : color;
    dummyElement.style.background = color;
    document.body.appendChild(dummyElement);
    const computedColor = getComputedStyle(dummyElement).color;
    document.body.removeChild(dummyElement);
    this.colorFormats[color] = computedColor;
  }
}
