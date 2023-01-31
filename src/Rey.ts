import { Got } from './GoT';

export class King extends Got {
  onTheThroneSince;
  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    onTheThroneSince: number,
  ) {
    super(name, family, age, status, 'Vais a morir todos');
    this.onTheThroneSince = onTheThroneSince;
  }
}
