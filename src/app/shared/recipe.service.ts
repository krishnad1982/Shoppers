import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './Ingredient-model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Pasta', 'This is pasta',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDM_oDgy7e3UJRAow3QjbYhnFjKA_wSGxEDfJnBxNQ-n_SSiu',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 1)]),
    new Recipe('Pizza', 'This is pizza',
      'https://cdn.shopify.com/s/files/1/1752/5753/products/Pep-2000x2000-white_1800x.jpg?v=1489198364',
      [new Ingredient('Chocolate', 1), new Ingredient('Milk', 1)]),
  ];
  constructor(private shoppingService: ShoppingService) { }

  addToShoppingList(ingredient: Ingredient[]) {
    this.shoppingService.addIngredients(ingredient);
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
