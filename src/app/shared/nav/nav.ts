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

}
