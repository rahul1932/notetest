import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterNote',
    pure: false
})
export class FilterNotesPipe implements PipeTransform {
    transform(items: any[], term): any {
        return term
            ? items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)
            : items;
    }
}

@Pipe({
    name: 'sortBy'
})
export class SortNotesPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        debugger
        //return items.sort(function (a, b) { return ((a[sortedBy] > b[sortedBy]) ? 1 : ((b[sortedBy] > a[sortedBy]) ? -1 : 0)) });
        return items.sort(function (b, a) { return ((a[sortedBy] > b[sortedBy]) ? 1 : ((b[sortedBy] > a[sortedBy]) ? -1 : 0)) });
    }
}