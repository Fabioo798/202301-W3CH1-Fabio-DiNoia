import { Got } from './GoT';

export class Squire extends Got {
  serve;
  grade;
  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    serve: string,
    grade: number,
  ) {
    super(name, family, age, status, 'Soy un loser');
    this.serve = serve;
    this.grade = grade;
  }
}
