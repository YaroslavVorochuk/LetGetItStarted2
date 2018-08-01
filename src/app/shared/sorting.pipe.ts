import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";
import { Item } from "./item.model";


@Pipe({
    name: 'sortingPipe'
})
export class SortingPipe implements PipeTransform {
    transform(items: Array<string>, parametr: string): Array<string> {
        items.sort((a:any, b: any) => {
            if (a[parametr] < b[parametr]){
                return -1;
            } else if (a[parametr] > b[parametr]) {
                return 1;
            } else {
                return 0;
            }
        });
        return items;

    }
}