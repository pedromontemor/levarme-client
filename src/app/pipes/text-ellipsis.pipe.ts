import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textellipsis'
})
export class TextEllipsisPipe implements PipeTransform {

    public constructor() {}

    transform(value:  string, limit: any): any {
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }

}
