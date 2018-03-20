import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FiltermultiPipe } from '../../pipes/filtermulti.pipe';


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
  curerntValue: string;
  isOpen: boolean;
  list: any[] | IDropdownItem[];
  itemSelected$: EventEmitter<any>;
  onOpen?: EventEmitter<any>;
  onClose?: EventEmitter<any>;
  toggleList?(): void;
  onInputChange?($event: Event): void;
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
  isOpen;
  itemSelected = null;
  curerntValue = '';
  
  constructor() { }

  ngOnInit() {
    this.config.template  = this.config.template || 'account';
    this.isOpen = !!this.config.isOpen;
  }

  // ngOnChanges({ list}) {
  //   console.log(list);

  // }

  onSelectItem(val)  {
    this.itemSelected = val;
    this.itemSelected$.emit(val);
  }

  toggleList() {
    this.isOpen = !this.isOpen;
  }

  onInputChange($event: KeyboardEvent) {
    this.curerntValue = (<HTMLInputElement>$event.target).value;
    console.log( );
    
  }

}


// @Pipe({ name: 'flyingHeroes' })
// export class FlyingHeroesPipe implements PipeTransform {
//   transform(allHeroes: Flyer[]) {
//     return allHeroes.filter(hero => hero.canFly);
//   }
// }