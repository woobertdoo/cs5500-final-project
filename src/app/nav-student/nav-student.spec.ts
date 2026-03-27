import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStudent } from './nav-student';

describe('NavStudent', () => {
  let component: NavStudent;
  let fixture: ComponentFixture<NavStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
