
export class BodyPart {
  constructor(name, positionId, target) {
    this.name = name
    this.positionId = positionId
    this.positions = {}
    this.actionms = {}
    this.target = target!=undefined ? target : {name: 'undefined'}
  }

  setPosition(newPositionId) {
    this.positionId = newPositionId
  }

  setTarget(newTarget) {
    this.target = newTarget;
  }

  getPositionText() {
    return this.positions[this.positionId].hasTarget == true ?
    this.name + this.positions[this.positionId].text + this.target.name :
    this.name + this.positions[this.positionId].text
  }
}

export class Arm extends BodyPart {
  constructor(name, positionId, target) {
    super(name, positionId, target)
    this.positions = {
      'relaxed': {
        text: ' is relaxing. ',
        hasTarget: false
      },
      'stroking': {
        text: ' is stroking ',
        hasTarget: true
      }
    }
    this.actions = [
      {
        name: 'Stroke',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('stroking');
        },
        targetTypes: [Arm]
      }
    ]
  }
}
