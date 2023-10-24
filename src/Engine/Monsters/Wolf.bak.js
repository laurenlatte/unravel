import Monster from './Monster.js';
import IncreMath from '../../Utils/IncreMath.js';

const numbers = new IncreMath();

export default class Wolf extends Monster {
  constructor(game) {
      super(game, "Wolf", numbers.createDecimal(0), numbers.createDecimal(100), 'large');
      this.sexStates = {
        0: 'The wolf stares at you hungrily, licking its lips',
        1: 'The wolf sniffs your ass and runs its tongue between your cheeks',
        2: 'The wolf mounts you and begins to thrust its member against your bum',
        3: "The wolf's tip presses against your anus with increasing force",
        4: "The wolf penetrates you and violently thrusts inside your guts",
        5: "The wolf is approaching orgasm",
        6: "The wolf erupts a geyser of cum inside your anus and it's knotted member quivers inside you",
        7: "The wolf loses interest and wanders away, leaving you a quivering heap."
      }
      this.attackStates = {
        0: {
          text: "The wolf lashes out and pounces on you, knocking you to the ground",
          damage: numbers.createDecimal(5),
        },
        1: {
          text: "The wolf claws at your face",
          damage: numbers.createDecimal(10),
        }
      }
      this.onPlayerDeath = "The wolf fucks your mangled body mercilessly as you slip in and out of consciousness."
      this.state = 0;
  }


}
