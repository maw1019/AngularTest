import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Restaurants } from '../model/mock-restaurants';
import { MatDialog } from '@angular/material/dialog';
import { RestaurantMenuDialogComponent } from '../restaurant-menu-dialog/restaurant-menu-dialog.component';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  restaurants = Restaurants;


  onSelect(restaurant: Restaurant): void {
    let restaurantAddress = this.restaurants[restaurant.id-1];
    this.dialog.open(RestaurantMenuDialogComponent,{data:{restaurandData:restaurantAddress}});
  }

  changeEven(even) {
    console.log(even);

    }

  ngOnInit() {

  }

}

