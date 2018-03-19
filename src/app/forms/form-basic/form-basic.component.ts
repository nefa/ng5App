import { Component, OnInit } from '@angular/core';

export interface IsummaryItem {
  name: string;
  label?: string | null;
  type: string;
  order: number;
  values?: string[];
  className?: string;
}

export interface IformBasic { // later build a class and extend it
  // syncStepTwo(): void;
  onSubmit(): void; // Promise<any> | Observable<any>
  onReset(): void;
}

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html', 
  styleUrls: ['./form-basic.component.css']
})
export class FormBasicComponent implements OnInit, IformBasic {
  summaryList: IsummaryItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  syncInfo(payload: IsummaryItem) {
    this.summaryList[payload.order] = payload;
  }

  unsyncInfo(name: string) {
    this.summaryList = this.summaryList.filter(item => name != item.name)
  }

  async onSubmit() { }

  onReset() {
    console.log('reset called', this);
    
  }

}
