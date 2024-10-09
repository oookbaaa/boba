import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {
  transform(values: any[], searchText: string): any[] {
    if (!values || !searchText) {
      return values;
    }
    return values.filter(value => {return JSON.stringify(value).toLowerCase().includes(searchText.toLowerCase())});
  }

}


