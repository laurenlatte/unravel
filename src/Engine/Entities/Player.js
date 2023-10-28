import Entity from './Entity.js';
import * as BodyParts from './BodyParts.js';
import Inventory from '../Items/Inventory.js';

export default class Player extends Entity {
  constructor(invSize, maxInvWeight) {
    super(0, 'Player');
    this.inventory = new Inventory(invSize, maxInvWeight);
    this.bodyParts = {
      leftArm: new BodyParts.Arm('Left arm', 'relaxed', 0),
      rightArm: new BodyParts.Arm('Right arm', 'relaxed', 0),
      vagina: new BodyParts.Vagina('Pussy', 'relaxed', 0),
      anus: new BodyParts.Anus('Asshole', 'relaxed', 0),
    }
  }
}
