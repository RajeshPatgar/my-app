import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCartComponent } from './emp-cart-component';

describe('EmpCartComponent', () => {
  let component: EmpCartComponent;
  let fixture: ComponentFixture<EmpCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
