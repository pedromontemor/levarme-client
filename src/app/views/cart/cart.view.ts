import { Component } from '@angular/core';
import { ICart, ICartItem } from 'src/app/models/ICart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.view.html',
  styleUrls: ['./cart.view.scss']
})
export class CartView {

    cart: ICart;

    constructor(public cartService: CartService) {
        this.cart = this.cartService.get();
    }

    removeItem(item: ICartItem) {
        this.cartService.removeItem(item); 
        this.cart.items.splice(this.cart.items.indexOf(item),1);
    }

    updateAmount(item: ICartItem, amount: number) {
        item.amount = amount;
        this.cart = this.cartService.updateItem(item);
    }

    getCartTotalPrice(): number {
        return this.cartService.getPrice();
    }
};
