import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FormBasicService {
  private _reset = new Subject();
  reset$ = this._reset.asObservable();

  constructor() { }

  reset() {
    this._reset.next('RESET');
  }

}
