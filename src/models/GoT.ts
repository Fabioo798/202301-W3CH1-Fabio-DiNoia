export class Got {
  alive: boolean;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public sentence: string
  ) {
    this.alive = true;
  }

  die() {
    this.alive = false;
  }
}
