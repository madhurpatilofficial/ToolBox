// navbar.component.ts

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuVisible = false;
  menuIconActive = false;

  constructor() { }

  ngOnInit(): void {
    console.log("Initial isMenuVisible:", this.isMenuVisible);
    this.checkScreenSize();
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.menuIconActive = this.isMenuVisible;
    console.log("Toggled isMenuVisible:", this.isMenuVisible);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMenuVisible = window.innerWidth <= 600;
  }
}