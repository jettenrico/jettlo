import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JettloNavbarComponent } from './jettlo-navbar.component';

describe('JettloNavbarComponent', () => {
  let component: JettloNavbarComponent;
  let fixture: ComponentFixture<JettloNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JettloNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JettloNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
