import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyOrderComponent } from './already-order.component';

describe('AlreadyOrderComponent', () => {
  let component: AlreadyOrderComponent;
  let fixture: ComponentFixture<AlreadyOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
