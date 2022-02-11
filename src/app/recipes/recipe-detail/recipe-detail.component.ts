import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipesComponent } from '../recipes.component';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers:[RecipeService]
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router:Router, private shoppingListService:ShoppingService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.recipe= this.recipeService.getRecipe(this.id);
      }
    )
  }
  EditRecipe(){
   // this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }

  toShoppingList(){
    this.shoppingListService.addRecipe(this.recipe);
  }
}
