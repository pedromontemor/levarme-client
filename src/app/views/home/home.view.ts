import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/app/models/IBook';
import { ICart } from 'src/app/models/ICart';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeView {

    books: IBook[] = [];
    cart: ICart = <ICart>{};
    cartPrice: number = 0;
    cartAmount: number = 0;
    loadingData: Boolean = true;
        

    constructor(public cartService: CartService, public bookService: BookService, public route: ActivatedRoute) {
        this.cart = this.cartService.get();
        this.cartPrice = this.cartService.getPrice();
        this.cartAmount = this.cartService.getAmount();
        this.route.queryParams.subscribe(query => {
            let title = query.title == undefined ? '' : query.title;
            this.bookService.get(title).then(books => {
                this.books = books;
                this.loadingData = false;
            });
        })
    }

    addToCart(book: IBook) {
        this.cart = this.cartService.addItem(book);
        this.cartPrice = this.cartService.getPrice();
        this.cartAmount = this.cartService.getAmount();
    }

};
