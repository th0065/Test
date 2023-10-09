import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
   
  transform(comptes: any[], search: string): any[] {
    if (!comptes) {
      return [];
    }
    if (!search) {
      return comptes;
    }

    search = search.toLocaleUpperCase();

    return comptes.filter(it => {
      return it.toLocaleUpperCase().includes(search);
    });
  }

}
