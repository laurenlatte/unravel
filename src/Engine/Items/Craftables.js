import * as Items from './Item';
import stoneSpearImg from '../../UI/Images/stoneSpearImg.png';


export class Craftable extends Items.Item {
  constructor(name, weight, isStackable, amount, image) {
    super(name, weight, isStackable, amount, image);
    this.recipe = []
  }

  getRecipe() {
    return this.recipe;
  }
}

export class Equipment extends Craftable {
  constructor(name, weight, isStackable, amount, image, armourBonus, attackBonus, equipmentLevel, slot) {
    super(name, weight, isStackable, amount, image);
    this.equippable = true;
    this.equipmentLevel = equipmentLevel
    this.armourBonus = armourBonus
    this.attackBonus = attackBonus
    this.slot = slot;
  }

  getArmourBonus() {
    return this.armourBonus * this.equipmentLevel;
  }

  getAttackBonus() {
    return this.attackBonus * this.equipmentLevel;
  }

}

export class StoneSpear extends Equipment {
  constructor() {
    super("Stone Spear", 10, false, 1, stoneSpearImg, 0, 5, 1, "rightHand");
    this.recipe = [
      {item: Items.Wood, amount: 7},
      {item: Items.Stone, amount: 2}
    ]
  }
}
