import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCheckComponent } from './guest-check.component';

describe('GuestCheckComponent', () => {
  let component: GuestCheckComponent;
  let fixture: ComponentFixture<GuestCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
