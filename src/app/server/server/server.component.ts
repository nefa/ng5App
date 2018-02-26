import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface IserverElement {
  id: number;
  type: string;
  name: string;
  content: string;
  active: boolean;
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input()
  element: IserverElement;

  @Output()
  deactivate: EventEmitter<{active: boolean, id: number}> = new EventEmitter<{active: boolean, id: number}>();

  @Output()
  test: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onTest() {
    this.test.emit(true);
  }

  stop() {
    this.deactivate.emit({active: false, id: this.element.id});
  }
}
