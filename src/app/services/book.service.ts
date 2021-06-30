import { Injectable } from "@angular/core";
import { IBook } from "../models/IBook";
import { AjaxService } from "./ajax.service";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(public ajaxService: AjaxService) {

    }

    get(title?: string): Promise<IBook[]> {
        return this.ajaxService.get<IBook[]>(`https://levarme-server-55n5n4qg6-pedromontemor.vercel.app/api/books?title=${title}`);
    }
}