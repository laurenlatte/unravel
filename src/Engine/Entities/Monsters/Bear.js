import Monster from './Monster.js';
import * as BodyParts from '../BodyParts.js'

export default class Bear extends Monster {
  constructor(id) {
    super(id, 'Bear');
    this.bodyParts = {
      leftPaw: new BodyParts.Arm('Left paw', 'relaxed'),
      rightPaw: new BodyParts.Arm('Right paw', 'relaxed'),
      penis: new BodyParts.Penis('Penis', 'relaxed'),
      anus: new BodyParts.Anus('Anus', 'relaxed'),
    }
  }
}
