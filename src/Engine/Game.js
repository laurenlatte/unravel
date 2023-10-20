import IncreMath from '../Utils/IncreMath.js';

const numbers = new IncreMath();

const DEFAULT_GAME_DATA = {
  currency: {
    awareness: numbers.createDecimal(0),
    gold: numbers.createDecimal(0),
  },
  stats: {
    awarenessToWake: numbers.createDecimal(100),
    playerHp: numbers.createDecimal(100),
    atkPower: numbers.createDecimal(1),
    pokePower: numbers.createDecimal(1),
    beastDefence: numbers.createDecimal(100),
    beastHp: numbers.createDecimal(100),
    goldPerHit: numbers.createDecimal(1),
  },
  costs: {
    atkUpgrade: numbers.createDecimal(10),
    pokeUpgrade: numbers.createDecimal(10),
  },
  effects: {
    isAwake: false
  }
};

export default class Game {

  constructor(gameData) {
    this.gameData = gameData != null ? gameData : DEFAULT_GAME_DATA;
  }

  addAwareness(value) {
    this.gameData.currency.awareness =
    this.gameData.currency.awareness.add(value);
  }

  subtractAwareness(value) {
    this.gameData.currency.awareness =
    this.gameData.currency.awareness.subtract(value);
  }

  damagePlayer(value) {
    this.gameData.stats.playerHp =
    this.gameData.stats.playerHp.subtract(value);
  }

  damageBeast(value) {
    this.gameData.stats.beastDefence.lessThanOrEqualTo(0) ?
    this.gameData.stats.beastHp =
    this.gameData.stats.beastHp.subtract(value) :
    this.gameData.stats.beastDefence =
    this.gameData.stats.beastDefence.subtract(value);
  }

  addGold(value) {
    this.gameData.currency.gold =
    this.gameData.currency.gold.add(value);
  }

  upgradeStat(statName, value) {
    this.gameData.stats[statName] =
    this.gameData.stats[statName].add(value)
  }

  purchaseUpgrade(statName, priceName) {
    const price = this.gameData.costs[priceName]
    if(this.gameData.currency.gold.greaterThanOrEqualTo(price)) {
      this.upgradeStat(statName, 1)
      this.gameData.currency.gold =
      this.gameData.currency.gold.subtract(price);
    }
    this.gameData.costs[priceName] =
    this.gameData.costs[priceName].times(1.5);
  }

  awakenBeast() {
    this.gameData.effects.isAwake = true;
    const beastLoop = setInterval(
      () => {
        if(this.gameData.currency.awareness.greaterThan(0)) {
          this.subtractAwareness(1);
          this.damagePlayer(0.1);
        } else {
          this.gameData.effects.isAwake = false;
          clearInterval(beastLoop);
        }
      },
      100
    )
  }

}
