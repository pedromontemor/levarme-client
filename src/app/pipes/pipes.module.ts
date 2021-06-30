import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEllipsisPipe } from './text-ellipsis.pipe';


@NgModule({
    declarations: [
        TextEllipsisPipe
    ],
    imports: [
        CommonModule,
    ],
    providers: [
    ],
    exports: [
        TextEllipsisPipe
    ]
})

export class PipesModule {
}
