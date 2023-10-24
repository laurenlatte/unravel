import IntercourseAction from './IntercourseActions.js';

export default function IntercourseActions({player, monsters}) {

  if(player) {
    // What can a body part do? It can change its position towards a target.
    const createBodyActionData = () => {
      var actionData = [];
      for(var bodyPartId in player.getBodyParts()) {
        var bodyPart = player.getBodyParts()[bodyPartId]
        for(var bodyAction in bodyPart.actions) {
          actionData.push(
            {
              actions: (target) => {bodyPart.actions[bodyAction](target)},
              targets: monsters[0].bodyParts,
            }
          )
        }
      }
      console.log(actionData);
      return actionData;
    }


    return (
      <div style={{}}>
        {createBodyActionData().map((actionData) => {
          return <IntercourseAction actionData={actionData} />
        })}
      </div>
    )
  } else return null;
}
