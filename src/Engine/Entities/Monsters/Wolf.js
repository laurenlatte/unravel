import Monster from './Monster.js';
import * as BodyParts from '../BodyParts.js'

export default class Wolf extends Monster {
  constructor(id) {
    super(id, 'Wolf');
    this.bodyParts = {
      leftPaw: new BodyParts.Arm('Left paw', 'relaxed'),
      rightPaw: new BodyParts.Arm('Right paw', 'relaxed'),
      penis: new BodyParts.Penis('Penis', 'relaxed'),
      anus: new BodyParts.Anus('Anus', 'relaxed'),
    }
  }
}
