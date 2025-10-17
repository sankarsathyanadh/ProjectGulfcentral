import { Component , HostListener  } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, NgbDropdownModule, RouterLinkWithHref],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
 isCollapsed = false;
   user = {
    name: 'John Doe',
    role: 'Admin',
    avatar: 'https://i.pravatar.cc/40'
  };
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
   ngOnInit() {
    this.checkIfMobile();
  }
   @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile();
  }
   checkIfMobile() {
    // Defines the media query for a mobile-sized screen
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    this.isCollapsed = mobileQuery.matches;

    console.log(`isCollapsed is now: ${this.isCollapsed}`);
  }

}
