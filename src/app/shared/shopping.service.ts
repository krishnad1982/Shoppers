import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './Ingredient-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomotos', 10)
  ];
  constructor() {

  }

  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }
}
