import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.css']
})
export class FontsComponent implements OnInit {
  inputText: string = '';

  fonts: string[] = [
    'Arial',
    'Arial Black',
    'Arial Narrow',
    'Arial Rounded MT Bold',
    'Bookman Old Style',
    'Bradley Hand ITC',
    'Calibri',
    'Cambria',
    'Candara',
    'Century',
    'Century Gothic',
    'Comic Sans MS',
    'Consolas',
    'Constantia',
    'Corbel',
    'Courier',
    'Courier New',
    'Franklin Gothic Medium',
    'Gabriola',
    'Garamond',
    'Georgia',
    'Impact',
    'Lucida Bright',
    'Lucida Calligraphy',
    'Lucida Console',
    'Lucida Fax',
    'Lucida Handwriting',
    'Lucida Sans',
    'Lucida Sans Typewriter',
    'Lucida Sans Unicode',
    'Microsoft Sans Serif',
    'Monotype Corsiva',
    'MS Gothic',
    'MS Outlook',
    'MS Reference Sans Serif',
    'MS Sans Serif',
    'MS Serif',
    'MV Boli',
    'Palatino',
    'Palatino Linotype',
    'Segoe Print',
    'Segoe Script',
    'Segoe UI',
    'Segoe UI Historic',
    'Segoe UI Symbol',
    'Tahoma',
    'Times',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
    'Wingdings',
    'Zapf Dingbats',
    'Symbol'
  ];

  selectedFont: string = 'Arial'; // Set default font to Arial
  
  convertedText: string = '';
  isLargeScreen: boolean = false;

  constructor( private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
    .subscribe(result => {
      this.isLargeScreen = result.matches;
    });
    throw new Error('Method not implemented.');

  }

  convertText() {
    this.convertedText = this.inputText;
  }

  copyConvertedText() {
    // Copy the converted text to the clipboard
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.left = '0';
    textarea.style.top = '0';
    textarea.style.opacity = '0';
    textarea.value = this.convertedText;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard!');
  }
}