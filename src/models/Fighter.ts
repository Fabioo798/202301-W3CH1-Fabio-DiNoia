/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import { Got } from './GoT';

export class Fighter extends Got {
  weapon;
  dexterity;
  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    dexterity: number,
  ) {
    super(name, family, age, 'Primero pego y luego pregunto');
    this.weapon = weapon;
    this.dexterity = dexterity;
  }
}
