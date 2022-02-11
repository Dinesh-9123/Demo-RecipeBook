import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {ShoppingService} from './shopping.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[ShoppingService]
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
    this.recipes= this.shoppingService.recipes;
  }

  recipes:Recipe[];
}
