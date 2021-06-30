import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeView } from './home/home.view';
import { CartView } from './cart/cart.view';
import { PipesModule } from '../pipes/pipes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        HomeView,
        CartView,
    ],
    imports: [
        CommonModule,
        PipesModule,
        NgbModule,
        FontAwesomeModule,
    ],
    providers: [

    ]
})

export class ViewsModule {}
