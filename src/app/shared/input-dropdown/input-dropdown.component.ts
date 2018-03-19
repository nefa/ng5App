import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface IDropdownItem {
  itemVisible?: boolean;
  itemDisabled?: boolean;
};

export interface IDropdownConfig {
  template?: string;
  placeholder?: string;
};

export interface IDropdown {
  config: IDropdownConfig;
  itemSelected: any | IDropdownItem;
  list: any[] | IDropdownItem[];
  itemSelected$: EventEmitter<any>;
  onOpen?: EventEmitter<any>;
  onClose?: EventEmitter<any>;

}

@Component({
  selector: 'input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.css']
})
export class InputDropdownComponent implements OnInit, IDropdown {
  @Input()
  list;
  
  @Input()
  config;
  
  @Output()
  itemSelected$ = new EventEmitter();
  
  itemSelected = null;
  
  constructor() { }

  ngOnInit() {
    this.config.template  = this.config.template || 'account';
  }

  onSelectItem(val)  {
    this.itemSelected = val;
    this.itemSelected$.emit(val);
  }

}
