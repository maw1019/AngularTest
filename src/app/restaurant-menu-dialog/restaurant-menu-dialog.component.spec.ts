import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuDialogComponent } from './restaurant-menu-dialog.component';

describe('RestaurantMenuDialogComponent', () => {
  let component: RestaurantMenuDialogComponent;
  let fixture: ComponentFixture<RestaurantMenuDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
