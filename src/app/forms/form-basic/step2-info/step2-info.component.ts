import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-step2-info',
  templateUrl: './step2-info.component.html',
  styleUrls: ['./step2-info.component.css']
})
export class Step2InfoComponent implements OnInit {
  @Input()
  extended: boolean;
  @Input()
  data; // an array of summary data

  constructor() { }

  ngOnInit() {
    console.log("init->", this.data);
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log("changes-->",changes);
    
  }

}
