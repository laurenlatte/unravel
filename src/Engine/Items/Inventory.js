

export default class Inventory {
  constructor(maxSize, maxWeight) {
    this.maxSize = maxSize;
    this.maxWeight = maxWeight;
    this.contents = []
  }

  getHeldWeight() {
    var heldWeight = 0;
    for(var itemKey in this.contents) {
      heldWeight += this.contents[itemKey].getWeight();
    }
    return heldWeight;
  }

  checkCanHoldWeight(item) {
    var heldWeight = this.getHeldWeight();
    if(item.getWeight() + heldWeight > this.maxWeight) {
      return false;
    } else {
      return true;
    }
  }

  checkHasInvSpaces(item) {
    if(this.contents.length >= this.maxSize) {
      for(var itemKey in this.contents) {
        if(item.constructor === this.contents[itemKey].constructor) {
          if(item.isStackable){
            return true;
          }
        }
      }
      return false;
    } else {
      return true;
    }
  }

  addItem(item) {
    if(this.checkHasInvSpaces(item) && this.checkCanHoldWeight(item)) {
      if(this.contents.length > 0) {
        var itemFound = false;
        for(var itemKey in this.contents) {
          if(item.constructor === this.contents[itemKey].constructor) {
            itemFound = true;
            if(item.isStackable) {
              this.contents[itemKey].addAmount(item.getAmount())
            } else {
              this.contents.push(item);
            }
          }
        }
        if(!itemFound) {
          this.contents.push(item);
        }
      } else {
        this.contents.push(item);
      }
    }
  }

  checkIsInInventory(itemType, amount) {
    for(var itemKey in this.contents) {
      if(this.contents[itemKey] instanceof itemType) {
        if(this.contents[itemKey].getAmount() >= amount) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  getItemIndex(itemType) {
    for(var itemKey in this.contents) {
      if(this.contents[itemKey] instanceof itemType) {
        return itemKey;
      }
    }
  }

  subtractFromItem(itemType, amount) {
    if(this.checkIsInInventory(itemType, amount)) {
      const index = this.getItemIndex(itemType);
      this.contents[index].subtractAmount(amount);
      if(this.contents[index].amount <= 0) {
        this.contents = this.contents.splice(1, index)
      }
    }
  }

  addToItem(itemType, amount) {
    if(this.checkIsInInventory(itemType, 1)) {
      const index = this.getItemIndex(itemType);
      this.contents[index].addAmount(amount);
    } else {
      this.addItem(new itemType(amount))
    }
  }

}
