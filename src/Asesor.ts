/* eslint-disable @typescript-eslint/indent */
import {Got} from './GoT';

export class Advisor extends Got {
  advicing;
  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    advicing: string,
  ) {
    super(
      name,
      family,
      age,
      status,
      'No sé por qué, pero creo que voy a morir pronto'
    );
    this.advicing = advicing;
  }
}
