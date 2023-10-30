import IncreMath from '../Utils/IncreMath.js';
import Wolf from './Entities/Monsters/Wolf';
import Bear from './Entities/Monsters/Bear';
import Player from './Entities/Player.js';
import {Wood, Stone, Copper} from './Items/Item';
import * as Craftables from './Items/Craftables';

const numbers = new IncreMath();

const DEFAULT_GAME_DATA = {
  devMode: false,
  time: {
    day: 0,
    season: 0,
    year: 0,
    hour: 12,
    minute: 0,
  },
  player: new Player(24, 200),
  home: {
    shelterLevel: 0,
    craftingLevel: 0,
    shelters: {
      0: {
        description: 'A rugged bedding of leaves lays on the ground.',
        energyRestore: 50,
        maxEnergy: 100,
        encounterChance: 0.3,
        upgradeCost: [
          {item: Wood, amount: 10}
        ]
      },
      1: {
        description: 'A ramshackle collection of sticks tied with twine roofs a small bedding of leaves on the ground.',
        energyRestore: 100,
        maxEnergy: 200,
        encounterChance: 0.1,
        upgradeCost: [
          {item: Wood, amount: 20},
          {item: Stone, amount: 10},
        ]
      },
      2: {
        description: 'A rugged log cabin stands proudly in the clearing.',
        energyRestore: 250,
        maxEnergy: 500,
        encounterChance: 0,
        upgradeCost: [
          {item: Wood, amount: 100},
          {item: Stone, amount: 50},
          {item: Copper, amount: 10}
        ],
      }
    },
    craftingBenches: {
      0: {
        description: "You have nowhere to craft items.",
        unlockedCraftables: [],
        upgradeCost: [
          {item: Wood, amount: 20},
          {item: Stone, amount: 10},
        ]
      },
      1: {
        description: "You have a rudimentary crafting bench.",
        unlockedCraftables: [Craftables.StoneSpear],
        upgradeCost: [
          {item: Wood, amount: 100},
          {item: Stone, amount: 50},
          {item: Copper, amount: 10},
        ]
      }
    }
  },
  encounters: {
    forest: {
      monsters: [Wolf]
    },
    forestInterior: {
      monsters: [Wolf, Bear]
    },
    stoneQuarry: {
      monsters: [Wolf, Bear]
    },
    activeEncounters: {
      monsters: [],
    }
  },
  progression: {
    stoneMine: false,
    crafting: false,
  }
};

export default class Game {

  constructor(gameData) {
    this.gameData = gameData != null ? gameData : DEFAULT_GAME_DATA;
    if(this.gameData.devMode == true) {
      this.gameData.home.shelterLevel = 2;
      this.gameData.home.craftingLevel = 1;
      this.gameData.progression.stoneMine = true;
    }
  }

  checkCanAffordShelter() {
    const upgradeCost = this.gameData.home.shelters[this.gameData.home.shelterLevel].upgradeCost;
    var canUpgrade = true;
    for(var costIndex in upgradeCost) {
      if(this.gameData.player.inventory.checkIsInInventory(upgradeCost[costIndex].item, upgradeCost[costIndex].amount) == false) {
        canUpgrade = false;
      }
    }
    return canUpgrade;
  }

  checkCanAffordCraftingBench() {
    const upgradeCost = this.gameData.home.craftingBenches[this.gameData.home.craftingLevel].upgradeCost;
    var canUpgrade = true;
    for(var costIndex in upgradeCost) {
      if(this.gameData.player.inventory.checkIsInInventory(upgradeCost[costIndex].item, upgradeCost[costIndex].amount) == false) {
        canUpgrade = false;
      }
    }
    return canUpgrade;
  }

  upgradeShelter() {
    const upgradeCost = this.gameData.home.shelters[this.gameData.home.shelterLevel].upgradeCost
    this.gameData.home.shelterLevel += 1;
    for(var costIndex in upgradeCost) {
      this.gameData.player.inventory.subtractFromItem(upgradeCost[costIndex].item, upgradeCost[costIndex].amount)
    }
  }

  upgradeCraftingBench() {
    const upgradeCost = this.gameData.home.craftingBenches[this.gameData.home.craftingLevel].upgradeCost
    this.gameData.home.craftingLevel += 1;
    for(var costIndex in upgradeCost) {
      this.gameData.player.inventory.subtractFromItem(upgradeCost[costIndex].item, upgradeCost[costIndex].amount)
    }
  }

  getCraftables() {
    return this.gameData.home.craftingBenches[this.gameData.home.craftingLevel].unlockedCraftables;
  }

  checkCanCraftItem(craftableItem) {
    const recipe = craftableItem.getRecipe();
    var canUpgrade = true;
    for(var recipeIndex in recipe) {
      if(this.gameData.player.inventory.checkIsInInventory(recipe[recipeIndex].item, recipe[recipeIndex].amount) == false) {
        canUpgrade = false;
      }
    }
    return canUpgrade;
  }

  craftItem(craftableItem) {
    if(this.checkCanCraftItem(craftableItem) && this.gameData.player.inventory.checkCanAddItem(craftableItem)) {
      const recipe = craftableItem.getRecipe();
      for(var recipeIndex in recipe) {
        this.gameData.player.inventory.subtractFromItem(recipe[recipeIndex].item, recipe[recipeIndex].amount)
      }
      this.gameData.player.inventory.addItem(craftableItem);
    }
  }

  addTime(minutes) {
    var newMinutes = this.gameData.time.minute + minutes;
    if(newMinutes >= 60) {
      var newHours = this.gameData.time.hour + Math.floor(newMinutes/60)
      newMinutes = newMinutes - (60*Math.floor(newMinutes/60));
      if(newHours >= 24) {
        var newDays = this.gameData.time.day + Math.floor(newHours/24);
        newHours = newHours - (24*Math.floor(newHours/24));
        this.gameData.time.day = newDays;
      }
      this.gameData.time.hour = newHours;
    }
    this.gameData.time.minute = newMinutes;
  }

  restPlayerCharacter() {
    const energyRestored =
    this.gameData.home.shelters[this.gameData.home.shelterLevel].energyRestore;
    const maxEnergy =
    this.gameData.home.shelters[this.gameData.home.shelterLevel].maxEnergy;
    const currentEnergy =
    this.gameData.player.getEnergy();
    let newEnergy = currentEnergy + energyRestored;
    if(newEnergy >= maxEnergy) {
      this.gameData.player.setEnergy(maxEnergy);
    } else {
      this.gameData.player.setEnergy(newEnergy);
    }
  }

  spawnMonster(location) {
    const monsters = this.gameData.encounters[location].monsters
    const monsterId = this.gameData.encounters.activeEncounters.monsters.length;
    const monster = new monsters[Math.floor(Math.random() * monsters.length)](monsterId);
    return monster
  }

  doEncounter(location) {
    const monster = this.spawnMonster(location);
    this.gameData.encounters.activeEncounters.monsters =
    [...this.gameData.encounters.activeEncounters.monsters, monster];
  }

  arousePlayer(amount) {
    this.gameData.player.addArousal(amount)
  }

  arouseMonster(id, amount) {
    this.gameData.encounters.activeEncounters.monsters[id].addArousal(amount)
  }

  hurtPlayer(amount) {
    this.gameData.player.addPain(amount)
  }

  hurtMonster(id, amount) {
    this.gameData.encounters.activeEncounters.monsters[id].addPain(amount)
  }

  removeMonsters() {
    this.gameData.encounters.activeEncounters.monsters = [];
  }

  discoverStoneMine() {
    this.gameData.progression.stoneMine = true;
  }



}
