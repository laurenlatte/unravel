import IncreMath from '../Utils/IncreMath.js';

const numbers = new IncreMath();

const DEFAULT_GAME_DATA = {
  resources: {
    wood: numbers.createDecimal(0),
    stone: numbers.createDecimal(0),
    copper: numbers.createDecimal(0),
  },
  attributes: {
    arousal: numbers.createDecimal(0),
    energy: numbers.createDecimal(100),
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

  addAttribute(attributeName, value) {
    this.gameData.attributes[attributeName] =
    this.gameData.attributes[attributeName].add(value)
  }

  subtractAttribute(attributeName, value) {
    this.gameData.attributes[attributeName] =
    this.gameData.attributes[attributeName].subtract(value)
  }

  setAttribute(attributeName, value) {
    this.gameData.attributes[attributeName] = numbers.createDecimal(value);
  }

}
