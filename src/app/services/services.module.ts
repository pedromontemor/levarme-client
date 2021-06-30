import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxService } from './ajax.service';
import { LocalStorageService } from './local-storage.service';
import { BookService } from './book.service';
import { CartService } from './cart.service';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        AjaxService,
        LocalStorageService,
        BookService,
        CartService
    ]
})

export class ServicesModule {}
