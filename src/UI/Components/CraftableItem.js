
export default function CraftableItem({game, itemClass, setItems}) {
  const item = new itemClass();

  const getRecipeItems = () => {
    var itemList = []
    const recipe = item.getRecipe();
    for(var itemIndex in recipe) {
      const itemInstance = new recipe[itemIndex].item(recipe[itemIndex].amount);
      itemList.push(itemInstance);
    }
    return itemList;
  }

  const onCraft = () => {
    game.craftItem(new itemClass());
    setItems(game.gameData.player.inventory.contents);
  }

  const recipeItems = getRecipeItems();

  return (
    <div style={{backgroundColor: '#464c59', border: 'solid', borderColor: 'white', width: '200px', height: '75px'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      {item.image &&
        <img src={item.image} style={{marginLeft: '7px', marginTop: '7px', marginBottom: '5px', width: '60px', height: '60px', backgroundColor: '#c9cdd6'}} />
      }
      <div style={{display: 'inline-block'}}>
        <p style={{color: 'white', fontSize: '15px', marginTop: '0px'}}>{item.name}</p>
        <button onClick={()=>{onCraft();}} style={{width:'40px', height: '20px', marginTop: '10px'}}>Craft</button>
      </div>
      <div style={{display: 'inline-block'}}>
        {recipeItems.map((recipeItem)=>{
          return (
            <div style={{position: 'relative'}}>
              <p style={{position: 'absolute', top: '2px', right: '2px', fontSize: '10px'}}>{recipeItem.amount}</p>
              <img style={{width: '20px', height: '20px'}} src={recipeItem.image} />
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}
