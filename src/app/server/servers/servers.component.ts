import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

//services
import {ServersServiceService} from '../../services/servers-service.service';

import { IserverElement } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  servers = [];
  allowNewServer = false;
  serverCreationStatus = 'No status';
  serverName = '';
  contor = 0;

  @ViewChild('refServerName')
  viewServerName: ElementRef;

  constructor(private _servers: ServersServiceService) { 

  }


  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this._servers.server.subscribe(res => this.servers = res);
    this._servers.changeServers(this.servers);

  }

  addServer() {
    if (!!this.serverName.length) {
      const sv = {
        id: ++this.contor,
        name: this.serverName,
        content: '',
        type: 'SERVER_ELEMENT',
        active: true
      };
      this.servers.push(sv);
      this._servers.changeServers(this.servers);
      this.serverCreationStatus = 'Server created';

      setTimeout(() => {
        this.serverCreationStatus = 'No status';
      }, 700);
    }
  }

  updateRef(refServerName: HTMLInputElement) {
    console.log('viewServerName', this.viewServerName);
    console.log('native el', this.viewServerName.nativeElement.value);
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

  // updateValue(node) {
  //   console.log('node', node);

  // }
}
