import { Injectable } from "@angular/core";
import { IBook } from "../models/IBook";
import { ICart, ICartItem } from "../models/ICart";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    sessionStorageKey = "cart";

    constructor(public localStorageService: LocalStorageService) {
    }

    public get(): ICart {
        return <ICart>this.localStorageService.getJson(this.sessionStorageKey) || <ICart>{ items: [] };
    }


    public updateItem(item: ICartItem): ICart {
        item.amount = (item.amount < 1) ? 1 : item.amount;
        let cart: ICart = this.get();
        let cartItem = cart.items.filter( i=> i.book.id == item.book.id)[0];
        let index = cart.items.indexOf(cartItem);
        cart.items[index] = item;
        this.localStorageService.setJson(this.sessionStorageKey, cart);
        return cart;
    }

    public addItem(book: IBook): ICart {
        let cart: ICart = this.get();
        let item = cart.items.filter(b => b.book.id == book.id)[0];
        if (item) {
            let index = cart.items.indexOf(item);
            cart.items[index].amount++;
        }
        else {
            cart.items.push(<ICartItem>{ 
                book: book, 
                amount: 1,
                price: book.price
            });
        }
        this.localStorageService.setJson(this.sessionStorageKey, cart);
        return cart;
    }

    public removeItem(item: ICartItem): ICart {
        let cart: ICart = this.get();
        let cartItem = cart.items.filter( i=> i.book.id == item.book.id)[0];
        cart.items.splice(cart.items.indexOf(cartItem), 1);
        this.localStorageService.setJson(this.sessionStorageKey, cart);
        return cart;
    }

    public getPrice(): number {
        let cart: ICart = this.get();
        if(cart.items.length == 0) {
            return 0;
        }
        return cart.items.map(i=> { return i.book.price * i.amount }).reduce((a, b) => a + b, 0);
    }

    public getAmount(): number {
        let cart: ICart = this.get();
        if(cart.items.length == 0) {
            return 0;
        }
        return cart.items.map(i=> { return  i.amount }).reduce((a, b) => a + b, 0);
    }
}