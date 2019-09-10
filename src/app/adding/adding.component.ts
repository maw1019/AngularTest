import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Restaurants } from '../model/mock-restaurants';
import { Router } from '@angular/router';
import {  FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {
  restaurantForm: FormGroup;

  @ViewChild('menuList') div: ElementRef;

  constructor(private router: Router) { };

  MenuInputForm: FormGroup;

  get restaurantProduct() {
    return this.restaurantForm.get('restaurantProduct') as FormArray;
  }

  get restaurantPrice() {
    return this.restaurantForm.get('restaurantPrice') as FormArray;
  }

  addMenu() {
    this.restaurantProduct.push(new FormControl('', Validators.required));
    this.restaurantPrice.push(new FormControl('', Validators.required));
  }

  deleteMenu(i){
    this.restaurantProduct.removeAt(i);
    this.restaurantPrice.removeAt(i);
  }


  ngOnInit() {
    this.restaurantForm = new FormGroup({
      restaurantName: new FormControl('', Validators.required),
      restaurantAddress: new FormControl('', Validators.required),
      restaurantTel: new FormControl('', Validators.required),
      restaurantProduct: new FormArray([], Validators.required),
      restaurantPrice: new FormArray([], Validators.required)
    });
  }

  onAddRestaurant(data: any): void {
    let restaurants = Restaurants.length + 1;
    let addRestaurantDate =
    {
      id: restaurants,
      address: data.restaurantAddress,
      name: data.restaurantName,
      telphone: data.restaurantTel
    }
    Restaurants.push(addRestaurantDate);
    this.router.navigate(['']);
    console.log(data)
  }













}
