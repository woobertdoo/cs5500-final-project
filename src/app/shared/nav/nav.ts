import { Component } from '@angular/core';
import { NavDropdown } from '../nav-dropdown/nav-dropdown';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [NavDropdown, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

}
