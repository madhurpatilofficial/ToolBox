// color-display.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent {
  selectedColor: string | null = null;

  normalColors: string[] = [
    'red', 'green', 'blue', 'black', 'yellow', 'purple', 'cyan', 'magenta', 'orange', 'brown',
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond',
    'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
    'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
    'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise',
    'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen',
    'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'greenyellow', 'honeydew', 'hotpink',
    'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue',
    'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen',
    'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'moccasin', 'navajowhite',
    'oldlace', 'olive', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred',
    'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
    'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'snow', 'springgreen',
    'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen'
  ];

  gradientColors: string[] = [
    'linear-gradient(90deg, #ffd700, #8b4513)',
    'linear-gradient(90deg, #4b0082, #00ff00)',
    'linear-gradient(90deg, #cd5c5c, #556b2f)',
    'linear-gradient(90deg, #ffa07a, #00ced1)',
    'linear-gradient(90deg, #483d8b, #20b2aa)',
    'linear-gradient(90deg, #6a5acd, #ff4500)',
    'linear-gradient(90deg, #48d1cc, #8b4513)',
    'linear-gradient(90deg, #ff69b4, #8b4513)',
    'linear-gradient(90deg, #dda0dd, #32cd32)',
    'linear-gradient(90deg, #d2b48c, #8a2be2)',
    'linear-gradient(90deg, #87ceeb, #8b4513)',
    'linear-gradient(90deg, #8a2be2, #ff8c00)',
    'linear-gradient(90deg, #4682b4, #cd5c5c)',
    'linear-gradient(90deg, #32cd32, #d2691e)',
    'linear-gradient(90deg, #00bfff, #da70d6)',
    'linear-gradient(90deg, #4169e1, #ff6347)',
    'linear-gradient(90deg, #ff8c00, #20b2aa)',
    'linear-gradient(90deg, #00fa9a, #8b4513)',
    'linear-gradient(90deg, #9932cc, #ff4500)',
    'linear-gradient(90deg, #1e90ff, #ff69b4)',
    'linear-gradient(90deg, #2e8b57, #ff6347)',
    'linear-gradient(90deg, #20b2aa, #8b4513)',
    'linear-gradient(90deg, #ffa07a, #87cefa)',
    'linear-gradient(90deg, #2f4f4f, #ff8c00)',
    'linear-gradient(90deg, #ff4500, #8b4513)',
    'linear-gradient(90deg, #98fb98, #cd5c5c)',
    'linear-gradient(90deg, #dda0dd, #00ff00)',
    'linear-gradient(90deg, #00ced1, #8b4513)',
    'linear-gradient(90deg, #008080, #da70d6)',
    'linear-gradient(90deg, #da70d6, #00ff7f)',
    'linear-gradient(90deg, #ff6347, #8b4513)',
    'linear-gradient(90deg, #8b4513, #40e0d0)',
    'linear-gradient(90deg, #87ceeb, #dda0dd)',
    'linear-gradient(90deg, #9932cc, #20b2aa)',
    'linear-gradient(90deg, #8b4513, #32cd32)',
    'linear-gradient(90deg, #2e8b57, #9932cc)',
    'linear-gradient(90deg, #00bfff, #8b4513)',
    'linear-gradient(90deg, #ff6347, #2e8b57)',
    'linear-gradient(90deg, #ff6347, #8b4513)',
    'linear-gradient(90deg, #800080, #008080)',
    'linear-gradient(90deg, #800000, #808000)',
    'linear-gradient(90deg, #008080, #800080)',
    'linear-gradient(90deg, #008000, #800000)',
    'linear-gradient(90deg, #800080, #800000)',
    'linear-gradient(90deg, #800000, #008080)',
    'linear-gradient(90deg, #008080, #800000)',
    'linear-gradient(90deg, #ff1493, #00ced1)',
    'linear-gradient(90deg, #da70d6, #ffd700)',
    'linear-gradient(90deg, #ff6347, #8a2be2)',
    'linear-gradient(90deg, #20b2aa, #ff8c00)',
    'linear-gradient(90deg, #ff4500, #00fa9a)',
    'linear-gradient(90deg, #00ff7f, #dda0dd)',
    'linear-gradient(90deg, #ff4500, #808080)',
    'linear-gradient(90deg, #ff8c00, #00ff00)',
    'linear-gradient(90deg, #00fa9a, #8b4513)',
    'linear-gradient(90deg, #9932cc, #008080)',
    'linear-gradient(90deg, #8b4513, #00ff00)',
    'linear-gradient(90deg, #008080, #ff6347)',
    'linear-gradient(90deg, #ffa07a, #8a2be2)',
    'linear-gradient(90deg, #32cd32, #800080)',
    'linear-gradient(90deg, #800080, #ff6347)',
    'linear-gradient(90deg, #008000, #da70d6)',
    'linear-gradient(90deg, #ff69b4, #8b4513)',
    'linear-gradient(90deg, #00ff7f, #9932cc)',
    'linear-gradient(90deg, #da70d6, #00fa9a)',
    'linear-gradient(90deg, #800080, #ff8c00)',
    'linear-gradient(90deg, #008080, #ff4500)',
    'linear-gradient(90deg, #800000, #ffa07a)',
    'linear-gradient(90deg, #ff6347, #008080)',
    'linear-gradient(90deg, #8b4513, #00fa9a)',
    'linear-gradient(90deg, #9932cc, #8b4513)',
    'linear-gradient(90deg, #800080, #ff4500)',
    'linear-gradient(90deg, #008080, #ff69b4)',
    'linear-gradient(90deg, #da70d6, #ff8c00)',
    'linear-gradient(90deg, #ff6347, #9932cc)',
    'linear-gradient(90deg, #8b4513, #00ff7f)',
    'linear-gradient(90deg, #008080, #ff6347)',
    'linear-gradient(90deg, #ffa07a, #8b4513)',
    'linear-gradient(90deg, #32cd32, #800080)',
    'linear-gradient(90deg, #800080, #ff6347)',
    'linear-gradient(90deg, #008000, #da70d6)',
    'linear-gradient(90deg, #ff69b4, #8b4513)',
    'linear-gradient(90deg, #00ff7f, #9932cc)',
    'linear-gradient(90deg, #da70d6, #00fa9a)',
    'linear-gradient(90deg, #800080, #ff8c00)',
    'linear-gradient(90deg, #008080, #ff4500)',
    'linear-gradient(90deg, #800000, #ffa07a)',
    'linear-gradient(90deg, #ff6347, #008080)',
    'linear-gradient(90deg, #8b4513, #00fa9a)',
    'linear-gradient(90deg, #9932cc, #8b4513)',
    'linear-gradient(90deg, #800080, #ff4500)',
    'linear-gradient(90deg, #008080, #ff69b4)',
    'linear-gradient(90deg, #da70d6, #ff8c00)',
    'linear-gradient(90deg, #ff6347, #9932cc)',
    'linear-gradient(90deg, #8b4513, #00ff7f)',
    'linear-gradient(90deg, #008080, #ff6347)',
    'linear-gradient(90deg, #ffa07a, #8b4513)',
    'linear-gradient(90deg, #32cd32, #800080)',
    'linear-gradient(90deg, #800080, #ff6347)',
    'linear-gradient(90deg, #008000, #da70d6)',
    'linear-gradient(90deg, #ff69b4, #8b4513)',
    'linear-gradient(90deg, #00ff7f, #9932cc)',
    'linear-gradient(90deg, #da70d6, #00fa9a)',
    'linear-gradient(90deg, #800080, #ff8c00)',
    'linear-gradient(90deg, #008080, #ff4500)',
    'linear-gradient(90deg, #800000, #ffa07a)',
    'linear-gradient(90deg, #ff6347, #008080)',
    'linear-gradient(90deg, #8b4513, #00fa9a)',
    'linear-gradient(90deg, #9932cc, #8b4513)',
    'linear-gradient(90deg, #800080, #ff4500)',
    'linear-gradient(90deg, #008080, #ff69b4)',
    'linear-gradient(90deg, #da70d6, #ff8c00)',
    'linear-gradient(90deg, #ff6347, #9932cc)',
    'linear-gradient(90deg, #8b4513, #00ff7f)',
    'linear-gradient(90deg, #008080, #ff6347)',
    'linear-gradient(90deg, #ffa07a, #8b4513)',
    'linear-gradient(90deg, #32cd32, #800080)',
    'linear-gradient(90deg, #800080, #ff6347)',
    'linear-gradient(90deg, #008000, #da70d6)',
    'linear-gradient(90deg, #ff69b4, #8b4513)',
    'linear-gradient(90deg, #00ff7f, #9932cc)',
    'linear-gradient(90deg, #da70d6, #00fa9a)',
    'linear-gradient(90deg, #800080, #ff8c00)',
    'linear-gradient(90deg, #008080, #ff4500)',
    'linear-gradient(90deg, #800000, #ffa07a)',
    'linear-gradient(90deg, #ff6347, #008080)',
    'linear-gradient(90deg, #8b4513, #00fa9a)',
    'linear-gradient(90deg, #9932cc, #8b4513)',
    'linear-gradient(90deg, #800080, #ff4500)',
    'linear-gradient(90deg, #008080, #ff69b4)',
    'linear-gradient(90deg, #da70d6, #ff8c00)',
    'linear-gradient(90deg, #ff6347, #9932cc)',
    'linear-gradient(90deg, #8b4513, #00ff7f)',
    'linear-gradient(90deg, #008080, #ff6347)',
    'linear-gradient(90deg, #ffa07a, #8b4513)',
    'linear-gradient(90deg, #32cd32, #800080)',
    'linear-gradient(90deg, #800080, #ff6347)',
    'linear-gradient(90deg, #008000, #da70d6)',
    'linear-gradient(90deg, #ff69b4, #8b4513)',
    'linear-gradient(90deg, #00ff7f, #9932cc)',
    'linear-gradient(90deg, #da70d6, #00fa9a)',
    'linear-gradient(90deg, #800080, #ff8c00)',
    'linear-gradient(90deg, #008080, #ff4500)',
    'linear-gradient(90deg, #800000, #ffa07a)',
    'linear-gradient(90deg, #ff6347, #008080)',
    'linear-gradient(90deg, #8b4513, #00fa9a)',
    'linear-gradient(90deg, #9932cc, #8b4513)',
    'linear-gradient(90deg, #800080, #ff4500)',
    'linear-gradient(90deg, #008080, #ff69b4)',
    'linear-gradient(90deg, #da70d6, #ff8c00)',
    'linear-gradient(90deg, #ff6347, #9932cc)',
    'linear-gradient(90deg, #8b4513, #00ff7f)',
    'linear-gradient(90deg, #008080, #ff6347)',
    'linear-gradient(90deg, #ffa07a, #8b4513)',
    'linear-gradient(90deg, #32cd32, #800080)',
    'linear-gradient(90deg, #800080, #ff6347)',
    'linear-gradient(90deg, #008000, #da70d6)',
    'linear-gradient(90deg, #ff69b4, #8b4513)',
    'linear-gradient(90deg, #00ff7f, #9932cc)',
    'linear-gradient(90deg, #da70d6, #00fa9a)',
    'linear-gradient(90deg, #800080, #ff8c00)'
  ];
  colorFormats: { [key: string]: string } = {};

  formatLeft = 0;
  formatTop = 0;

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

  onColorBoxClick(event: MouseEvent, color: string): void {
    this.selectedColor = color;

    this.formatLeft = event.clientX;
    this.formatTop = event.clientY;
  }
}
