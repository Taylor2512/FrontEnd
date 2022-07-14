import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcarComponent } from './navcar.component';

describe('NavcarComponent', () => {
  let component: NavcarComponent;
  let fixture: ComponentFixture<NavcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
