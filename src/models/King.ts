/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import { Got } from './GoT';

export class King extends Got {
  onTheThroneSince;
  constructor(
    name: string,
    family: string,
    age: number,

    onTheThroneSince: number,
  ) {
    super(name, family, age, 'Vais a morir todos');
    this.onTheThroneSince = onTheThroneSince;
  }
}
