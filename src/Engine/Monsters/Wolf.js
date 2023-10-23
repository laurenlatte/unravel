import Monster from './Monster.js';

export default class Wolf extends Monster {
  constructor(game) {
      super(game, "Wolf", 0, 100, 'large');
  }

}
