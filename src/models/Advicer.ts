import { Fighter } from './Fighter';
import { Got } from './GoT';

export class Advisor extends Got {
  constructor(
    name: string,
    family: string,
    age: number,
    public advicing: Fighter
  ) {
    super(name, family, age, 'No sé por qué, pero creo que voy a morir pronto');
  }
}
