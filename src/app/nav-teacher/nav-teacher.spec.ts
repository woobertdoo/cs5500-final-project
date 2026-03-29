import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTeacher } from './nav-teacher';

describe('NavTeacher', () => {
  let component: NavTeacher;
  let fixture: ComponentFixture<NavTeacher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTeacher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTeacher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
