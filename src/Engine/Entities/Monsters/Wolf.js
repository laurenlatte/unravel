import Monster from './Monster.js';
import * as BodyParts from '../BodyParts.js'

export default class Wolf extends Monster {
  constructor(id) {
    super(id, 'Wolf');
    this.bodyParts = {
      leftPaw: new BodyParts.Arm('Left paw', 'relaxed'),
      rightPaw: new BodyParts.Arm('right paw', 'relaxed'),
    }
  }
}
