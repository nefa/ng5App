import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [];
  allowNewServer = false;
  serverCreationStatus = 'No status';
  serverName = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  addServer() {
    if (!!this.serverName.length) {
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server created';

      setTimeout(() => {
        this.serverCreationStatus = 'No status';
      }, 700);
    }
  }
  // onChangeServerName(e: Event) {
  //   this.serverName = (<HTMLInputElement>e.target).value;
  // }
}
