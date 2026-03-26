import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropdown } from './nav-dropdown';

describe('NavDropdown', () => {
  let component: NavDropdown;
  let fixture: ComponentFixture<NavDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
