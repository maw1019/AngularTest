import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Menus } from '../model/mock-restaurants';

export interface DialogData {
  restaurandData: object;
}
let menuList: object;

@Component({
  selector: 'app-restaurant-menu-dialog',
  templateUrl: './restaurant-menu-dialog.component.html',
  styleUrls: ['./restaurant-menu-dialog.component.css']
})
export class RestaurantMenuDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RestaurantMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  menuList = showMenu(this.data.restaurandData);


  ngOnInit() {

  }

}

function showMenu(restaurant) {
  for (let i = 0; i < Menus.length; i++) {
    if (Menus[i].id === restaurant.id) {
     return Menus[i].menu;
    }
  }
}
