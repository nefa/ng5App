import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


interface IformBasic { // later build a class and extend it
  onSubmit(): void; // Promise<any> | Observable<any>
  onReset(): void;
};

class FormBasic implements IformBasic {
  // @TODO
  // DI post western/payments 
  // DI on a subject that can emit, reset and submit

  async onSubmit() {

  };
  onReset() { }; 

}

export interface IWesternReceiveMoney {
  checkMtcn(control: FormControl): { [key: string]: boolean } | null; //validator function
  checkAmount(): void;
  checkCurrency(): void;
}

@Component({
  selector: 'app-receive-money',
  templateUrl: './receive-money.component.html',
  styleUrls: ['./receive-money.component.css']
})
export class ReceiveMoneyComponent extends FormBasic implements OnInit, OnDestroy, IWesternReceiveMoney {

  WS_RECEIVE_POST_EP_SEGMENT = '/we-some-endpoint-segment'

  westernReceive: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
   }

  ngOnInit() {
    this.westernReceive = this.formBuilder.group({
      mtcn: ['', [Validators.required, this.checkMtcn.bind(this)]]
    });
  }
  
  ngOnDestroy() {}

  async onSubmit() {

  };

  onReset() {}; 

  checkMtcn(control: FormControl): { [key: string]: boolean } | null {
    const _only_digits = '^[0-9]{1,10}$', //only digits, fix 10 length. use in Validators.pattern
      _all_except_digits = '[^0-9]$', //except digits
      _exact_length = '^.{11}$'; // 11 characters length

    const _regexp_digits = new RegExp(_all_except_digits);
    const _regexp_length = new RegExp(_exact_length);

    if (_regexp_length.test(control.value) || _regexp_digits.test(control.value)) {
      console.log(control.value);
      this.westernReceive.patchValue({
        'mtcn': control.value.slice(0, -1)
      });
      return { mtcnForbidden: true };
    }
    return null;
  }

  checkAmount():void {};
  checkCurrency():void {};


}
