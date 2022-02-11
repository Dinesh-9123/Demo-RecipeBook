import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  recipes:Recipe[]=[
    new Recipe('Hamburger','A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled.',
    'https://thumbs.dreamstime.com/b/big-burger-isolated-white-43062448.jpg'),
     
  ]
  
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
  }


}
