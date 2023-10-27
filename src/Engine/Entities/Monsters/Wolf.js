import Monster from './Monster.js';
import * as BodyParts from '../BodyParts.js'

export default class Wolf extends Monster {
  constructor(id) {
    super(id, 'Wolf');
    this.bodyParts = {
      leftPaw: new BodyParts.Arm('Left paw', 'relaxed', id),
      rightPaw: new BodyParts.Arm('Right paw', 'relaxed', id),
      penis: new BodyParts.Penis('Penis', 'relaxed', id),
      anus: new BodyParts.Anus('Anus', 'relaxed', id),
    }
  }
}
