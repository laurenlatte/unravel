import Entity from './Entity.js';
import * as BodyParts from './BodyParts.js';

export default class Player extends Entity {
  constructor() {
    super();
    this.bodyParts = {
      leftArm: new BodyParts.Arm('Left arm', 'relaxed'),
      rightArm: new BodyParts.Arm('right arm', 'relaxed'),
    }
  }
}
