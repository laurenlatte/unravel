import Entity from '../Entity.js';
import IncreMath from '../../../Utils/IncreMath.js';

const numbers = new IncreMath();

export default class Monster extends Entity {
  constructor(id, name) {
    super(id, name);
  }

  getCompatiblePartsAndActions(playerParts, actions) {
    var randomProperty = function (obj) {
      var keys = Object.keys(obj);
      return obj[keys[ keys.length * Math.random() << 0]];
    };
    var partsFound = false;
    while(!partsFound) {
      const action = actions[Math.floor(Math.random() * actions.length)]
      const part = randomProperty(playerParts);
      for(var targetId in action.targetTypes) {
        if(part instanceof action.targetTypes[targetId].type) {
          partsFound = true;
          return {part: part, action: action, arousalGain: action.targetTypes[targetId].arousalGain}
        }
      }
    }
  }

  doMonsterAction(player, setActionLabels) {
    var actionLabels = []
    for(var bodyPartId in this.bodyParts) {
      const bodyPart = this.bodyParts[bodyPartId];
      if(!bodyPart.isOccupied) {
        //50% chance that a bodypart that isnt occupied will take an action
        if(numbers.getRandomChance(0.5)) {
          const playerParts = player.bodyParts;
          const actions = bodyPart.actions;
          // choose random action
          const chosenActionData = this.getCompatiblePartsAndActions(playerParts, actions);
          console.log(chosenActionData);
          chosenActionData.action.function({value: chosenActionData.part, name: chosenActionData.part.name});
          player.addArousal(chosenActionData.arousalGain);
          this.addArousal(chosenActionData.arousalGain);
          actionLabels = [...actionLabels, this.name + "'s " + bodyPart.name + ' is performing ' + chosenActionData.action.name + ' on ' + chosenActionData.part.name];
          console.log(actionLabels)
        }
      }
    }
    setActionLabels(actionLabels)
  }
}
