import { IBook } from "./IBook";

export interface ICart {
    items: ICartItem[];
}

export interface ICartItem {
    book: IBook;
    amount: number;
}