import { Component } from '@angular/core';

@Component({
  selector: 'app-string-manipulator',
  templateUrl: './string-manipulator.component.html',
  styleUrls: ['./string-manipulator.component.css'],
})
export class StringManipulatorComponent {
  inputString: string = '';
  resultString: string = '';
  replaceFrom: string = '';
  replaceTo: string = '';
  insertSubstring: string = '';
  insertPosition: number = 0;
  insertContent: string = '';

  showReplaceInputs: boolean = false;
  showInsertInputs: boolean = false;

  // Function to remove spaces from input string
  removeSpaces() {
    this.resultString = this.inputString.replace(/\s/g, '');
  }

  // Function to convert input string to uppercase
  toUpperCase() {
    this.resultString = this.inputString.toUpperCase();
  }

  // Function to convert input string to lowercase
  toLowerCase() {
    this.resultString = this.inputString.toLowerCase();
  }

  // Function to reverse the input string
  reverseString() {
    this.resultString = this.inputString.split('').reverse().join('');
  }

  // Function to reverse the words in the input string
  reverseWords() {
    this.resultString = this.inputString.split(' ').reverse().join(' ');
  }

  // Function to count the number of words in the input string
  countWords() {
    const words = this.inputString.match(/\b\w+\b/g);
    this.resultString = words ? words.length.toString() : '0';
  }

  // Function to clear both input and result strings
  clear() {
    this.inputString = '';
    this.resultString = '';
    this.resetInputs();
  }

  // Function to capitalize the first letter of each word in the input string
  capitalizeWords() {
    this.resultString = this.inputString.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
  }

  // Function to toggle the case of each character in the input string
  toggleCase() {
    this.resultString = this.inputString.replace(/./g, (char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );
  }

  // Function to remove duplicate characters from the input string
  removeDuplicates() {
    this.resultString = Array.from(new Set(this.inputString.split(''))).join(
      ''
    );
  }

  // Function to sort characters in the input string alphabetically
  sortCharacters() {
    this.resultString = this.inputString.split('').sort().join('');
  }

  // Function to encode the input string in Base64 format
  encodeBase64() {
    this.resultString = btoa(this.inputString);
  }

  // Function to decode Base64 encoded string back to normal text
  decodeBase64() {
    this.resultString = atob(this.inputString);
  }

  // Function to convert input string to camel case
  toCamelCase() {
    this.resultString = this.inputString.replace(/\W+(.)/g, (match, chr) =>
      chr.toUpperCase()
    );
  }

  // Function to truncate the input string to a specified length
  truncateString(length: number) {
    if (this.inputString.length > length) {
      this.resultString = this.inputString.substring(0, length) + '...';
    } else {
      this.resultString = this.inputString;
    }
  }

  // Function to convert the input string to title case
  toTitleCase() {
    this.resultString = this.inputString
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  // Function to check if input string is a palindrome
  checkPalindrome() {
    if (this.inputString) {
      const original = this.inputString.toLowerCase().replace(/[\W_]/g, '');
      const reversed = original.split('').reverse().join('');
      this.resultString =
        original === reversed ? 'Palindrome' : 'Not a Palindrome';
    }
  }
  // Function to replace occurrences of a substring in the input string
  replaceSubstring() {
    this.resultString = this.inputString.replace(
      new RegExp(this.replaceFrom, 'g'),
      this.replaceTo
    );
    this.resetInputs(); // Hide inputs after replacing
  }

  // Function to convert input string to kebab case
  toKebabCase() {
    this.resultString = this.inputString.replace(/\W+/g, '-').toLowerCase();
  }

  insertSubString() {
    if (
      this.insertPosition >= 0 &&
      this.insertPosition <= this.inputString.length
    ) {
      this.resultString =
        this.inputString.slice(0, this.insertPosition) +
        this.insertContent +
        ' ' +
        this.inputString.slice(this.insertPosition);
      this.resetInsertInputs();
    } else {
      this.resultString = this.inputString;
    }
  }

  // Reset insert inputs
  resetInsertInputs() {
    this.insertContent = '';
    this.insertPosition = 0;
  }

  // Reset all input fields and flags
  resetInputs() {
    this.showReplaceInputs = false;
    this.showInsertInputs = false;
    this.replaceFrom = '';
    this.replaceTo = '';
    this.insertSubstring = '';
    this.insertPosition = 0;
  }
}
