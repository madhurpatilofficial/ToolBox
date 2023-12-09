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
    this.checkScreenSize();
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    this.menuIconActive = !this.menuIconActive;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMenuVisible = window.innerWidth > 600;
  }
}
