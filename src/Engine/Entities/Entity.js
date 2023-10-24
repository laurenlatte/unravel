
export default class Entity {
  constructor(name) {
    this.name = name
    this.bodyParts = {
      /*
      leftArm: new BodyParts.Arm('Left arm', 'relaxed'),
      rightArm: new BodyParts.Arm('right arm', 'relaxed'),
      leftLeg: new BodyPart('left leg', 'relaxed', 'naked'),
      rightLeg: new BodyPart('right leg', 'relaxed', 'naked'),
      torso: new BodyPart('relaxed', 'naked'),
      head: new BodyPart('relaxed', 'naked'),
      genitals: new BodyPart('relaxed', 'naked'),
      anus: new BodyPart('relaxed', 'naked')
      */
    }
    this.attributes = {
      arousal: 0,
      pain: 0,
      energy: 100,
    }
  }

  getBodyStatus() {
    // Returns list of body part states
    const bodyStates = []
    for(const bodyPart in this.bodyParts) {
      bodyStates.push(bodyPart.getPositionText());
    }
  }

  getArousal() {
    return this.attributes.arousal;
  }

  getPain() {
    return this.attributes.pain;
  }

  getEnergy() {
    return this.attributes.energy;
  }

  setArousal(value) {
    this.attributes.arousal = value;
  }

  setPain(value) {
    this.attributes.pain = value;
  }

  setEnergy(value) {
    this.attributes.energy = value;
  }

  addArousal(value) {
    this.attributes.arousal += value;
  }

  addPain(value) {
    this.attributes.pain += value;
  }

  addEnergy(value) {
    this.attributes.energy += value;
  }

  subtractArousal(value) {
    this.attributes.arousal -= value;
  }

  subtractPain(value) {
    this.attributes.pain -= value;
  }

  subtractEnergy(value) {
    this.attributes.energy -= value;
  }

  getName() {
    return this.name;
  }

  getBodyParts() {
    return this.bodyParts;
  }

  moveBody(bodyPart, position, target) {
    this.bodyParts[bodyPart].setPosition(position);
    this.bodyParts[bodyPart].setTarget(target);
  }

}
