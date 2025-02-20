function cakes(recipe, available) {
    let maxCakes = Infinity;
    for (let ingredient in recipe) {
      if (recipe.hasOwnProperty(ingredient)) {
        if (!available.hasOwnProperty(ingredient)) {
          return 0;
        }
        let cakes = Math.floor(available[ingredient] / recipe[ingredient]);
        if (cakes < maxCakes) {
          maxCakes = cakes;
        }
      }
    }
    return maxCakes;
  }
  
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))