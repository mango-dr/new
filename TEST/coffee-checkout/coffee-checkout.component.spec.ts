import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCheckoutComponent } from './coffee-checkout.component';

describe('CoffeeCheckoutComponent', () => {
  let component: CoffeeCheckoutComponent;
  let fixture: ComponentFixture<CoffeeCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
