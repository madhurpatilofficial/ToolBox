import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercount',
  templateUrl: './charactercount.component.html',
  styleUrls: ['./charactercount.component.css']
})
export class CharactercountComponent {
  textInput: string = '';
  totalCharacters: number = 0;
  specialCharacters: number = 0;
  uppercaseCharacters: number = 0;
  lowercaseCharacters: number = 0;

  calculateCharacterCounts() {
    this.totalCharacters = this.textInput.length;
    this.specialCharacters = this.countSpecialCharacters(this.textInput);
    this.uppercaseCharacters = this.countUppercaseCharacters(this.textInput);
    this.lowercaseCharacters = this.countLowercaseCharacters(this.textInput);
  }

  countSpecialCharacters(text: string): number {
    const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    const matches = text.match(specialCharactersRegex);
    return matches ? matches.length : 0;
  }

  countUppercaseCharacters(text: string): number {
    const uppercaseCharactersRegex = /[A-Z]/g;
    const matches = text.match(uppercaseCharactersRegex);
    return matches ? matches.length : 0;
  }

  countLowercaseCharacters(text: string): number {
    const lowercaseCharactersRegex = /[a-z]/g;
    const matches = text.match(lowercaseCharactersRegex);
    return matches ? matches.length : 0;
  }
}
