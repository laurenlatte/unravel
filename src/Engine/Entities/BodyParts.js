export class BodyPart {
  constructor(name, positionId, parentId, target) {
    this.name = name
    this.positionId = positionId
    this.parentId = parentId
    this.positions = {}
    this.actions = {};
    this.isOccupied = false;
    this.target = target!=undefined ? target : {name: 'undefined'}
  }

  setPosition(newPositionId) {
    this.positionId = newPositionId
  }

  setTarget(newTarget) {
    this.target = newTarget;
  }

  setIsOccupied(value) {
    this.isOccupied = value;
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
      ACTIONTYPES.stroke,
      ACTIONTYPES.rub,
      ACTIONTYPES.penetrate
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
      ACTIONTYPES.rub,
      ACTIONTYPES.penetrate,
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
      ACTIONTYPES.rub,
      ACTIONTYPES.envelop,
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
      ACTIONTYPES.rub,
      ACTIONTYPES.envelop,
    ]
  }
}

const ACTIONTYPES = {
  relax:{},
  stroke: {
    name: 'Stroke',
    function: (part, target)=>{
        part.setTarget(target.value)
        part.setPosition('stroking');
        target.value.setPosition('stroking')
        target.value.setTarget(part)
    },
    targetTypes: [
      {type: Arm, arousalGain: 5},
      {type: Penis, arousalGain: 10},
    ]
  },
  rub: {
    name: 'Rub',
    function: (part, target)=>{
        part.setTarget(target.value)
        part.setPosition('rubbing');
        target.value.setPosition('rubbing')
        target.value.setTarget(part)
    },
    targetTypes: [
      {type: Anus, arousalGain: 10},
      {type: Vagina, arousalGain: 15},
    ]
  },
  envelop: {
    name: 'Envelop',
    function: (part, target)=>{
        part.setTarget(target.value)
        part.setPosition('penetrated');
        target.value.setPosition('penetrating')
        target.value.setTarget(part)
    },
    targetTypes: [
      {type: Arm, arousalGain: 15},
      {type: Penis, arousalGain: 25},
    ]
  },
  penetrate: {
    name: 'Penetrate',
    function: (part, target)=>{
        part.setTarget(target.value)
        part.setPosition('penetrating');
        target.value.setPosition('penetrated')
        target.value.setTarget(part)
    },
    targetTypes: [
      {type: Anus, arousalGain: 15},
      {type: Vagina, arousalGain: 20},
    ]
  }
}
