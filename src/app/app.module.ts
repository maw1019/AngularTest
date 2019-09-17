import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddingComponent } from './adding/adding.component';
import { OrderComponent } from './order/order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlreadyOrderComponent } from './already-order/already-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RestaurantMenuDialogComponent } from './restaurant-menu-dialog/restaurant-menu-dialog.component';


const appRoutes: Routes = [
  { path: 'adding', component: AddingComponent },
  { path: 'order', component: OrderComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    AddingComponent,
    OrderComponent,
    AlreadyOrderComponent,
    RestaurantMenuDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  entryComponents: [
    RestaurantMenuDialogComponent,
    RestaurantsComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
