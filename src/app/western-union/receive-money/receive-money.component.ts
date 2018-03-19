import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, PatternValidator } from '@angular/forms';



/** services */
import { WesternUnionService } from '../../services/western-union.service';
import { FormBasicService } from '../../services/form-basic.service';

/** models */
import { FormBasicComponent, IsummaryItem } from '../../forms/form-basic/form-basic.component'

interface Iaccount {
  nickname: string;
  iban: string;
  typeId: number;
  account: string;
  balance: string;
  currency: string;
  status: string;
}

export interface IWesternReceiveMoney {
  // mtcnMask: string[];
  /**Validator functions */
  checkMtcn(control: FormControl): { [key: string]: boolean } | null;
}

@Component({
  selector: 'app-receive-money',
  templateUrl: './receive-money.component.html',
  styleUrls: ['./receive-money.component.css'],
  providers: [WesternUnionService, FormBasicService]
})
export class ReceiveMoneyComponent extends FormBasicComponent implements OnInit, OnDestroy, IWesternReceiveMoney {

  WS_RECEIVE_POST_EP_SEGMENT = '/we-some-endpoint-segment';

  westernReceive: FormGroup;
  accounts: Iaccount[] = [];
  // amountMask = ['$', ' ', /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];

  constructor(private formBuilder: FormBuilder, private wu: WesternUnionService, private fbs: FormBasicService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();


    this.getPrerequisites();

    this.fbs.reset$.subscribe(reset => {
      this.westernReceive.reset();
    });

    //form validation per prop/FormControl ??
    this.westernReceive = this.formBuilder.group({
      mtcn: ['', [Validators.required /*, this.checkMtcn.bind(this)*/]],
      amountCurrency: this.formBuilder.group({
        amount: ['', [Validators.required/*Validators.pattern(/^\d*(?:[.,]\d{1,2})?$/)]*/]],
        currency: ['']
      })
    });

    this.westernReceive.valueChanges.subscribe(
      (value) => console.log(value)
    );

    // this.westernReceive.statusChanges.subscribe(
    //   (status) => console.log(status);
        // );
  }

  ngOnDestroy() {}

  async onSubmit() {
    // const shape = remapData(this.westernReceive)
    // let result = await this.payments.post(shape, WS_RECEIVE_POST_EP_SEGMENT);

    // this.goNextStep(result.step, this.westernReceive)
  }

  onReset() {
    this.fbs.reset();
  }

  async getPrerequisites() {
    try {
      const data = await this.wu.getWesternPrerequisites();
      console.log(data);
      this.accounts = data.accounts;
      console.log(this.accounts);
      

    } catch (err) {
      console.error(err);
    }
  }

  checkMtcn(control: FormControl): { [key: string]: boolean } | null {
    // const _only_digits = '^[0-9]{1,10}$', //only digits, fix 10 length. use in Validators.pattern
    //   _all_except_digits = '[^0-9]$', //except digits
    //   _exact_length = '^.{11}$'; // 11 characters length

    // const _regexp_digits = new RegExp(_all_except_digits);
    // const _regexp_length = new RegExp(_exact_length);

    // if (_regexp_length.test(control.value) || _regexp_digits.test(control.value)) {
    //   console.log(control.value);
    //   this.westernReceive.patchValue({
    //     'mtcn': control.value.slice(0, -1)
    //   });
    //   return { mtcnForbidden: true };
    // }
    return null;
  }


  onSelectAccount(account: Iaccount) {
    console.log(account);
    
  }

  onAccountOpen($event) {

  }

  onAccountClose($event) {

  }

  onAmountChange($event: Event) {
    if (this.amount.status === "VALID") {
      const _info: IsummaryItem = {
        name: 'amount',
        label: 'Amount_label',
        type: '?',
        order: 3,
        className: '-amount'
      };
      this.syncInfo(_info);
    
    } else {
      this.unsyncInfo('amount');
    }
  }

  onMtcnChange($event: Event) {
    if (this.mtcn.status === "VALID") {
      const _info: IsummaryItem = {
        name: 'metcn',
        label: 'Mtcn_label',
        type: '?',
        order: 4,
        className: '-mtcn'
      };
      this.syncInfo(_info);

    } else {
      this.unsyncInfo('mtcn');
    }
  }

  get amountCurrency(): FormArray {
    return (<FormArray>this.westernReceive.get('amountCurrency'));
  }

  get amount() {
    return this.amountCurrency.get('amount');
  }
  
  get mtcn() {
    return this.westernReceive.get('mtcn');
  }

  // disableEvent(evt) {
  //   let e = <KeyboardEvent>evt;
  //   e.preventDefault();
  //   console.log(e);
  // }
}
