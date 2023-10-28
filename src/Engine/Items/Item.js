import woodImg from '../../UI/Images/wood.png';

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
    super('Wood', 5, true, amount, woodImg)
  }
}
