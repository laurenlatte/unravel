import woodImg from '../../UI/Images/wood.png';
import stoneImg from '../../UI/Images/stone.png';

export class Item {
  constructor(name, weight, isStackable, amount, image) {
    this.name = name;
    this.weight = weight;
    this.isStackable = isStackable;
    this.amount = amount;
    this.image = image;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(value) {
    this.amount = value
  }

  addAmount(value) {
    this.amount += value;
  }

  subtractAmount(value) {
    this.amount -= value;
  }

  getWeight() {
    return this.amount * this.weight;
  }
}

export class Wood extends Item {
  constructor(amount) {
    super('Wood', 1, true, amount, woodImg)
  }
}

export class Stone extends Item {
  constructor(amount) {
    super('Stone', 3, true, amount, stoneImg)
  }
}

export class Copper extends Item {
  constructor(amount) {
    super('Copper', 15, true, amount, woodImg)
  }
}
