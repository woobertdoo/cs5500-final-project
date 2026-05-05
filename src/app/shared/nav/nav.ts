import { Component, signal, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { NavDropdown } from '../nav-dropdown/nav-dropdown';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, NgIf, NavDropdown, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnDestroy {
  isMobileMenuOpen = signal(false);
  expandedSections = signal<{ [key: string]: boolean }>({
    student: false,
    teacher: false,
    institutions: false,
    about: false,
  });
  isDark = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      this.isDark = true;
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    // const currentTheme = document.documentElement.getAttribute("data-theme");

    if (this.isDark) {
    document.documentElement.setAttribute("data-theme", "dark"); // ✅ correct
    localStorage.setItem("theme", "dark");
    } else {
    document.documentElement.removeAttribute("data-theme"); // ✅ back to light
    localStorage.setItem("theme", "light");
    } 
  }

  toggleMobileMenu() {
    const nextState = !this.isMobileMenuOpen();
    this.isMobileMenuOpen.set(nextState);

    if (nextState) {
      this.expandedSections.set({
        student: false,
        teacher: false,
        institutions: false,
        about: false,
      });
    }

    if (typeof document !== 'undefined') {
      document.body.style.overflow = nextState ? 'hidden' : '';
      document.documentElement.style.overflow = nextState ? 'hidden' : '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    this.expandedSections.set({
      student: false,
      teacher: false,
      institutions: false,
      about: false,
    });

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }

  toggleSection(section: string) {
    this.expandedSections.update(sections => {
      const nextState: { [key: string]: boolean } = {
        student: false,
        teacher: false,
        institutions: false,
        about: false,
      };

      nextState[section] = !sections[section];
      return nextState;
    });
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }  


  // ngOnInit(): void {
  //   if (localStorage.getItem("theme") === "dark") {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //   }
  // }
  

  
}
