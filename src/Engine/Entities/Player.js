import Human from './Human.js';
import * as BodyParts from './BodyParts.js';
import Inventory from '../Items/Inventory.js';

export default class Player extends Human {
  constructor(invSize, maxInvWeight) {
    super(0, 'Player');
    this.inventory = new Inventory(invSize, maxInvWeight);
  }
}
