export default class user {
  name: string;
  score: number;
  constructor() {
    this.name = "";
    this.score = 60;
  }
  addScore() {
    this.score += 10;
  }
  minusScore() {
    this.score -= 10;
  }
}
