import * as BodyParts from './BodyParts';
import Entity from './Entity.js';

export default class Human extends Entity {
  constructor(id, name) {
    super(0, name);
    this.bodyParts = {
      leftArm: new BodyParts.Arm('Left arm', 'relaxed', 0),
      rightArm: new BodyParts.Arm('Right arm', 'relaxed', 0),
      vagina: new BodyParts.Vagina('Pussy', 'relaxed', 0),
      anus: new BodyParts.Anus('Asshole', 'relaxed', 0),
    }
    this.equipment = {
      head: undefined,
      chest: undefined,
      leftHand: undefined,
      rightHand: undefined,
      legs: undefined,
      boots: undefined
    }
  }

  setEquipment(slot, item) {
    this.equipment[slot] = item;
  }

  getAttackBonus() {
    var itemBonus = 0;
    for(var key in this.equipment) {
      itemBonus += this.equipment[key].getAttackBonus();
    }
    return itemBonus;
  }

  getArmourBonus() {
    var itemBonus = 0;
    for(var key in this.equipment) {
      itemBonus += this.equipment[key].getArmourBonus();
    }
    return itemBonus;
  }

}
