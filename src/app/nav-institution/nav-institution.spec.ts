import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInstitution } from './nav-institution';

describe('NavInstitution', () => {
  let component: NavInstitution;
  let fixture: ComponentFixture<NavInstitution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavInstitution]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavInstitution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
