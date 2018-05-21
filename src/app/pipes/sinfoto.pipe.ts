import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {
    let noImagePath = 'assets/img/noimage.png';
    if(!imagenes){
      return noImagePath;
    }
    return (imagenes.length > 0) ? imagenes[1].url : noImagePath;
  }

}
