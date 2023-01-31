import { Got } from './GoT';

export class Squire extends Got {
  serve;
  grade;
  constructor(
    name: string,
    family: string,
    age: number,
    serve: string,
    grade: number
  ) {
    super(name, family, age, 'Soy un loser');
    this.serve = serve;
    this.grade = grade;
  }
}
