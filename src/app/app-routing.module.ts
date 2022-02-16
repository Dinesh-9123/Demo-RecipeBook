import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {path:'',  redirectTo:'/recipes', pathMatch:'full'},
  {path:'recipes', component:RecipesComponent, children:[
    {path:'', component:RecipeStartComponent},
    {path:'new', component:RecipeEditComponent},
     
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit', component:RecipeEditComponent}
     
  ]},
  {path:'shopping-list', component:ShoppingListComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout',component:LogoutComponent},
  {path:'forgetPassword', component:ForgetPasswordComponent},
  {path:'changePassword', component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
