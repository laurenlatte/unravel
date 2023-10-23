export default class Monster {
  constructor(game, name, arousal, maxArousal, dickSize) {
    this.name = name;
    this.arousal = arousal;
    this.maxArousal = maxArousal;
    this.dickSize = dickSize;
    this.sexState = 0;
    this.attackState = 0;
    this.sexStates = {};
    this.attackStates = {};
    this.onPlayerDeath = "";
  }

  advanceSex() {
    this.sexState = this.sexState+1;
  }

  advanceAttack() {
    this.attackState = this.attackState+1;
  }
}
