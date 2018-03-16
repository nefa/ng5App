import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Subject } from 'rxjs/Subject';


// export function  checkMtcn(control: FormControl): { [key: string]: boolean } | null {
//   const _only_digits = '^[0-9]{1,10}$', //only digits, fix 10 length. use in Validators.pattern
//     _all_except_digits = '[^0-9]$', //except digits
//     _exact_length = '^.{11}$'; // 11 characters length

//   const _regexp_digits = new RegExp(_all_except_digits);
//   const _regexp_length = new RegExp(_exact_length);

//   if (_regexp_length.test(control.value) || _regexp_digits.test(control.value)) {
//     console.log(control.value);
//     // this.westernReceive.patchValue({
//     //   'mtcn': control.value.slice(0, -1)
//     // });
//     return { mtcnForbidden: true };
//   }
//   return null;
// }
  


@Injectable()
export class FormBasicService {
  private _reset = new Subject();
  reset$ = this._reset.asObservable();

  constructor() { }

  reset() {
    this._reset.next('RESET');
  }

}
