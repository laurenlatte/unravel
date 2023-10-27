
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
      },
      'rubbing': {
        text: ' is rubbing against ',
        hasTarget: true,
      },
      'penetrating': {
        text: ' is penetrating ',
        hasTarget: true,
      }
    }
    this.actions = [
      {
        name: 'Stroke',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('stroking');
        },
        targetTypes: [
          {type: Arm, arousalGain: 5},
          {type: Penis, arousalGain: 10},
        ]
      },
      {
        name: 'Rub',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('rubbing');
        },
        targetTypes: [
          {type: Anus, arousalGain: 10},
          {type: Vagina, arousalGain: 15},
        ]
      },
      {
        name: 'Penetrate',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('penetrating');
        },
        targetTypes: [
          {type: Anus, arousalGain: 15},
          {type: Vagina, arousalGain: 20},
        ]
      }
    ]
  }
}

export class Penis extends BodyPart {
  constructor(name, positionId, target) {
    super(name, positionId, target)
    this.positions = {
      'relaxed': {
        text: ' is relaxing. ',
        hasTarget: false
      },
      'rubbing': {
        text: ' is rubbing against ',
        hasTarget: true
      },
      'penetrating': {
        text: ' is penetrating ',
        hasTarget: true
      }
    }
    this.actions = [
      {
        name: 'Rub',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('rubbing');
        },
        targetTypes: [
          {type: Arm, arousalGain: 10},
          {type: Vagina, arousalGain: 15},
          {type: Anus, arousalGain: 15}
        ]
      },
      {
        name: 'Penetrate',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('penetrating');
        },
        targetTypes: [
          {type: Vagina, arousalGain: 20},
          {type: Anus, arousalGain: 20}
        ]
      }
    ]
  }
}

export class Vagina extends BodyPart {
  constructor(name, positionId, target) {
    super(name, positionId, target)
    this.positions = {
      'relaxed': {
        text: ' is relaxing. ',
        hasTarget: false
      },
      'rubbing': {
        text: ' is rubbing against ',
        hasTarget: true
      },
      'penetrated': {
        text: ' is being penetrated by ',
        hasTarget: true
      }
    }
    this.actions = [
      {
        name: 'Rub',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('rubbing');
        },
        targetTypes: [
          {type: Arm, arousalGain: 10},
          {type: Penis, arousalGain: 15},
        ]
      },
      {
        name: 'Envelop',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('penetrated');
        },
        targetTypes: [
          {type: Arm, arousalGain: 15},
          {type: Penis, arousalGain: 25},
        ]
      }
    ]
  }
}

export class Anus extends BodyPart {
  constructor(name, positionId, target) {
    super(name, positionId, target)
    this.positions = {
      'relaxed': {
        text: ' is relaxing. ',
        hasTarget: false
      },
      'rubbing': {
        text: ' is rubbing against ',
        hasTarget: true
      },
      'penetrated': {
        text: ' is being penetrated by ',
        hasTarget: true
      }
    }
    this.actions = [
      {
        name: 'Rub',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('rubbing');
        },
        targetTypes: [
          {type: Arm, arousalGain: 10},
          {type: Penis, arousalGain: 15},
        ]
      },
      {
        name: 'Envelop',
        function: (target)=>{
            this.setTarget(target.value)
            this.setPosition('penetrated');
        },
        targetTypes: [
          {type: Arm, arousalGain: 15},
          {type: Penis, arousalGain: 25},
        ]
      }
    ]
  }
}
