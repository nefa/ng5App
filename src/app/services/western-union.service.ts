import { Injectable } from '@angular/core';

const prerequisites = {
    countries: ['Romania', 'Franta', 'Spania', 'Anglia'],
    currencies: ['RON', 'EUR', 'USD'],
    personalInfo: {
      age: 19,
      name: 'QQ B'
    }
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
