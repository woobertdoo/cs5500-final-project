import { Component, signal, OnDestroy } from '@angular/core';
import { NavDropdown } from '../nav-dropdown/nav-dropdown';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [NavDropdown, RouterLink],
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
    }
  }
}
