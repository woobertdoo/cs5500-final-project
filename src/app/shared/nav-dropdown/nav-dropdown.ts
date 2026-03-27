import { Component, signal, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-dropdown',
  imports: [RouterLink],
  templateUrl: './nav-dropdown.html',
  styleUrl: './nav-dropdown.css',
})
export class NavDropdown {
  linkTexts = input<string[]>([""]);
  routes = input<string[]>([""]);
  routeDict = computed(() => {
    const map = new Map();
    for (const [i, route] of this.routes().entries()) {
      console.log(`${i}, ${route}`);
      map.set(route, this.linkTexts()[i]);
    }

    return map;
  });
}
