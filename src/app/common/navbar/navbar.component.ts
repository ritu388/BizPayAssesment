import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  hideToggle: boolean = false;
  sidebarWidth: string = '250px';
  sidebarHeight: string = '100vh';
  sidebarBackgroundColor: string = '#1c1526';
  iconColor: string = 'white';
  iconName: boolean = true;
  iconWidth: string = '22px'; 
  logoWidth: string = '62%';
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.hideToggle = !this.hideToggle;
    if (this.hideToggle) {
      this.sidebarWidth = '85px';
      this.sidebarBackgroundColor = '#ffffff';
      this.iconColor = 'white';
      this.iconName = false;
      this.iconWidth = '35px';
      this.logoWidth = '40%';
    } else {
      this.sidebarWidth = '250px';
      this.sidebarBackgroundColor = '#1c1526';
      this.iconColor = 'white';
      this.iconName = true;
      this.iconWidth = '45px';
      this.logoWidth = '62%';
    }
  }
}
