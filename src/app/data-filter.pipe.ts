import { PipeTransform, Pipe } from '@angular/core';
import { Iproduct } from './Shared/Model/product';

@Pipe({
    name:'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
    transform(viewpro:Iproduct[],searchTerm:string):Iproduct[] {
        if (!viewpro || !searchTerm) {
            return viewpro;
        }

        return viewpro.filter(data =>
            data.Name.toLowerCase().indexOf(searchTerm.toLowerCase()) !=-1);
    }
}