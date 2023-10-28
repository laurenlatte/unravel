import * as Items from './Item';
import stoneSpearImg from '../../UI/Images/stoneSpearImg.png';


export class Craftable extends Items.Item {
  constructor(name, weight, isStackable, amount, image) {
    super(name, weight, isStackable, amount, image);
    this.recipe = []
  }
}

export class StoneSpear extends Craftable {
  constructor() {
    super("Stone Spear", 10, false, 1, stoneSpearImg);
    this.recipe = [
      {Item: Items.Wood, amount: 7},
      {Item: Items.Stone, amount: 2}
    ]
  }
}
