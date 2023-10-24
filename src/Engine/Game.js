import IncreMath from '../Utils/IncreMath.js';
import Wolf from './Monsters/Wolf';
import Player from './Player.js';

const numbers = new IncreMath();

const DEFAULT_GAME_DATA = {
  time: {
    day: 0,
    season: 0,
    year: 0,
    hour: 12,
    minute: 0,
  },
  resources: {
    wood: numbers.createDecimal(0),
    stone: numbers.createDecimal(0),
    copper: numbers.createDecimal(0),
  },
  player: new Player(),
  home: {
    shelterLevel: numbers.createDecimal(0),
    upgradeCost: {
      wood: 10,
      stone: 0,
      copper: 0,
    },
    shelters: {
      0: {
        description: 'A rugged bedding of leaves lays on the ground.',
        energyRestore: 50,
        maxEnergy: 100
      },
      1: {
        description: 'A ramshackle collection of sticks tied with twine roofs a small bedding of leaves on the ground.',
        energyRestore: 100,
        maxEnergy: 200,
      }
    }
  },
  encounters: {
    forest: {
      monsters: [Wolf]
    },
    activeEncounters: {
      monsters: [],
    }
  },
  progression: {
    houseBuilt: false,
  }
};

export default class Game {

  constructor(gameData) {
    this.gameData = gameData != null ? gameData : DEFAULT_GAME_DATA;
  }

  addResource(resourceName, value) {
    this.gameData.resources[resourceName] =
    this.gameData.resources[resourceName].add(value)
  }

  subtractResource(resourceName, value) {
    this.gameData.resources[resourceName] =
    this.gameData.resources[resourceName].subtract(value)
  }

  checkCanAffordShelter() {
    if(
      this.gameData.resources.wood.greaterThanOrEqualTo(this.gameData.home.upgradeCost.wood) &&
      this.gameData.resources.stone.greaterThanOrEqualTo(this.gameData.home.upgradeCost.stone) &&
      this.gameData.resources.copper.greaterThanOrEqualTo(this.gameData.home.upgradeCost.copper)
    ) {
      return true
    } else {
      return false
    }
  }

  upgradeShelter() {
    this.gameData.home.shelterLevel =
    this.gameData.home.shelterLevel.add(1);
    this.gameData.resources.wood =
    this.gameData.resources.wood.subtract(
      this.gameData.home.upgradeCost.wood
    )
    this.gameData.resources.stone =
    this.gameData.resources.stone.subtract(
      this.gameData.home.upgradeCost.stone
    )
    this.gameData.resources.copper =
    this.gameData.resources.copper.subtract(
      this.gameData.home.upgradeCost.copper
    )
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
    const monster = new monsters[0](monsterId);
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

}
