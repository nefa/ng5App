import { Injectable } from '@angular/core';

const prerequisites = {
    countries: ['Romania', 'Franta', 'Spania', 'Anglia'],
    currencies: ['RON', 'EUR', 'USD'],
    personalInfo: {
      age: 19,
      name: 'QQ B'
    },
    accounts: [
      {
        nickname: 'account1',
        iban: '00000007',
        typeId: 20,
        account: 'xcvxcv-stuff',
        balance: '500',
        currency: 'EUR',
        status: 'STATUS_CODE_1'
      },

      {
        nickname: 'account2',
        iban: '00000008',
        typeId: 26,
        account: 'ycvxcv-Other-stuff',
        balance: '1000',
        currency: 'RON',
        status: 'STATUS_CODE_1'
      }
    ]
  };

@Injectable()
export class WesternUnionService {

  constructor() { }

  getWesternPrerequisites(): Promise<any> {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve(prerequisites);
      }, 1500);
    });
  }
}
