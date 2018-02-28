import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ServersServiceService {

  private servers = new BehaviorSubject<any>([
    {id: 1, type: 'server' , name: 'test_1', content:'', active:true},
    { id: 2, type: 'server', name: 'test_2', content: '', active: false }]);

  public server;  

  constructor() {
    this.server = this.servers.asObservable();
  }

  changeServers(allServers) {
    this.servers.next(allServers);
  }


}
