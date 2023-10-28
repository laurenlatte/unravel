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
  constructor(name, weight, isStackable, amount, image) {
    super(name, weight, isStackable, amount, image);
    this.equippable = true;
    this.armourBonus = 0
    this.attackBonus = 0
  }
}

export class StoneSpear extends Equipment {
  constructor() {
    super("Stone Spear", 10, false, 1, stoneSpearImg);
    this.recipe = [
      {item: Items.Wood, amount: 7},
      {item: Items.Stone, amount: 2}
    ]
    this.armourBonus = 0;
    this.attackBonus = 5;
  }
}
