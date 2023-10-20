import * as ADNotations from "@antimatter-dimensions/notations";
import Decimal from 'break_infinity.js';

export default class IncreMath {

  constructor() {
    this.notationFormatter = new ADNotations.ScientificNotation();
  }

  createDecimal(value) {
    return new Decimal(value);
  }

  format(value) {
    return this.notationFormatter.format(value);
  }

  getRandomChance(chancePercentage) {
    var d = Math.random();
    return d <= chancePercentage ? true : false
  }

}
