import { Component, OnInit } from '@angular/core';

import { IserverElement } from '../server/server.component';

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
  contor = 0;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  addServer() {
    if (!!this.serverName.length) {
      this.servers.push({
        id: this.contor++,
        name: this.serverName,
        content: '',
        type: 'SERVER_ELEMENT',
        active: true
      });

      this.serverCreationStatus = 'Server created';

      setTimeout(() => {
        this.serverCreationStatus = 'No status';
      }, 700);
    }
  }


  updateServer(serverData: IserverElement) {
    console.log(arguments, this);
    this.servers = this.servers.map(s => {
      if (s.id === serverData.id) {
        return {...s, ...serverData};
      }
      return s;
    });
    // for (let s of this.servers) {
    //   if (s.id === serverData.id) {
    //     Object.assign(s, serverData);
    //   }
    // }
  }
  // onChangeServerName(e: Event) {
  //   this.serverName = (<HTMLInputElement>e.target).value;
  // }
}
