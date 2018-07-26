import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/Ingredient-model';
import { ShoppingService } from '../../shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef
  @ViewChild('amountInput') amountInputReference: ElementRef


  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
  onAddItem() {
    const newIngredient = new Ingredient
      (this.nameInputReference.nativeElement.value,
      this.amountInputReference.nativeElement.value);
    this.shoppingService.addIngredient(newIngredient);
  }
}
