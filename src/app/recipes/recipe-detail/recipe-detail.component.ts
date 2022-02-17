import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import Swal from 'sweetalert2';
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
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'added to shopping list',
      showConfirmButton: false,
      timer: 1500
    })

    this.shoppingListService.addRecipe(this.recipe);
  }

  DeleteRecipe(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      this.recipeService.deleteRecipe(this.id);
      this.router.navigateByUrl('/recipes')
      }
       
    })
   
  }

}
