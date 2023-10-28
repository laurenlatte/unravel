

export default class Inventory {
  constructor(maxSize, maxWeight) {
    this.maxSize = maxSize;
    this.maxWeight = maxWeight;
    this.contents = []
  }

  checkCanHoldWeight(item) {
    var heldWeight = 0;
    for(var itemKey in this.contents) {
      heldWeight += this.contents[itemKey].getWeight();
    }
    if(item.getWeight() + heldWeight > this.maxWeight) {
      return false;
    } else {
      return true;
    }
  }

  checkHasInvSpaces(item) {
    if(this.contents.length >= this.maxSize) {
      for(var itemKey in this.contents) {
        if(item instanceof this.contents[itemKey] && item.isStackable) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }

  addItem(item) {
    console.log("Adding item " + item.name)
    if(this.checkHasInvSpaces(item) && this.checkCanHoldWeight(item)) {
      console.log("Passed inv check")
      if(this.contents.length > 0) {
        for(var itemKey in this.contents) {
          if(item instanceof this.contents[itemKey]) {
            if(item.isStackable) {
              this.contents[itemKey].addAmount(item.getAmount())
            } else {
              this.contents.push(item);
            }
          } else {
            this.contents.push(item);
          }
        }
      } else {
        this.contents.push(item);
      }
    }
    console.log('New Inv Contents: ' + this.contents)
  }

}
