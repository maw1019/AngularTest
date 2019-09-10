import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddingComponent } from './adding/adding.component';
import { OrderComponent } from './order/order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlreadyOrderComponent } from './already-order/already-order.component';



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
    AlreadyOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,{ enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
