import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPadComponent } from './order-pad.component';

describe('OrderPadComponent', () => {
  let component: OrderPadComponent;
  let fixture: ComponentFixture<OrderPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
