function isValidWalk(walk) {
    if (walk.length !== 10) { // If the walk is not exactly 10 minutes long, return false
      return false;
    }
  
    let verticalDistance = 0;
    let horizontalDistance = 0;
  
    // Calculate the vertical and horizontal distances traveled based on the directions in the walk array
    for (let direction of walk) {
      switch (direction) {
        case 'n':
          verticalDistance++;
          break;
        case 's':
          verticalDistance--;
          break;
        case 'e':
          horizontalDistance++;
          break;
        case 'w':
          horizontalDistance--;
          break;
      }
    }
  
    // The walk is valid if and only if the total vertical and horizontal distances are both 0 (i.e., we end up back where we started)
    return verticalDistance === 0 && horizontalDistance === 0;
  }
  