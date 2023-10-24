
export class BodyPart {
  constructor(name, positionId, target) {
    this.name = name
    this.positionId = positionId
    this.positions = {}
    this.actionms = {}
    this.target = target
  }

  setPosition(newPositionId) {
    this.positionId = newPositionId
  }

  setTarget(newTarget) {
    this.target = newTarget;
  }

  getPositionText() {
    return this.positions[this.position]
  }
}

export class Arm extends BodyPart {
  constructor(name, positionId, target) {
    super(name, positionId, target)
    this.positions = {
      'relaxed': this.name + ' is relaxing. ',
      'stroking': this.name + ' is stroking ' + this.target,
      'choking': this.name + ' is choking ' + this.target,
      'rubbing': this.name + ' is rubbing against ' + this.target,
      'penetrating': this.name + ' is penetrating ' + this.target,
    }
    this.actions = {
      'Stroke Cock': (target)=>{
        this.setPosition('stroking');
        this.setTarget(target)
      }
    }
  }
}
