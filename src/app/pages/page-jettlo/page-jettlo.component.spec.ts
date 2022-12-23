import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJettloComponent } from './page-jettlo.component';

describe('PageJettloComponent', () => {
  let component: PageJettloComponent;
  let fixture: ComponentFixture<PageJettloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJettloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJettloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
