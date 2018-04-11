import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let b = false;
    for(var i=0; i<value.length; i++){
      if(value[i] === ".") b=true;
    }
    if(!b){
      return "R$ "+value.toLowerCase()+".00";  
    }
    return "R$ "+value.toLowerCase();
  }
}
