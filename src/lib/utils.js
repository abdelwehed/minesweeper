/**
 * given a specific box index return the indexes around it
 * @param {the box index} i 
 */
const surroundingsBoxes = (i) => {
  let surrounding = [];
  if (i < 30 || i > 449 || i%30 === 0 || i%30 === 29 || i === 0) {
    // handle the borders case
    if(i === 0) {
      surrounding = [i, i+1, i+30, i+31];
    }
    if(i === 29) {
      surrounding = [i, i-1, i+29, i+30];
    }
    if(i === 450) {
      surrounding = [i, i+1, i-29, i-30];
    }
    if(i === 479) {
      surrounding = [i, i-1, i-30, i-31];
    }
    // left boxes
    if(i % 30 === 0) {
      surrounding = [i, i+1, i-29, i-30, i+30, i+31];
    }
    // right boxes
    if(i % 30 === 29) {
      surrounding = [i, i-1, i+29, i+30, i-30, i-31];
    }
    // top boxes
     if(i > 0 && i < 29) {
      surrounding = [i, i-1, i+1, i+29, i+30, i+31];
    }
    // bottom boxes
    if(i > 450 && i < 479) {
      surrounding = [i, i-1, i+1, i-29, i-30, i-31];
    }
  } else {
    surrounding = [i, i-1, i+1, i+29, i+30, i+31, i-29, i-30, i-31];
  }

  return surrounding;
}

/**
 * 
 * @param {the mines number we want to add to the game table} minesNumber 
 * @param {the table of the game} table 
 */
export const putMinesRandomly = (minesNumber, table) => {
  for( let n = 0 ; n < minesNumber ; n++) {
    const random = Math.floor(Math.random() * 480);
    if (table[random] !== 5) {
        table[random] = 5;
        checkSurroundings(random, table);
    }else {
        n--;
    }
  }
  return table;
}

/**
 * 
 * @param {index to handle its surroundings} i 
 * @param {the table containing all the game contnet} table 
 */
export const checkSurroundings = (i, table) => {
  for (let j = 0 ; j < surroundingsBoxes(i).length ; j++) {
    changeBox(surroundingsBoxes(i)[j], table);
  }
}

/**
 * 
 * @param {} boxIndex 
 * @param {the game table} table 
 */
export const changeBox = (boxIndex, table) => {
  const Nombres = [0, 1, 2, 3, 4];
  if (table[boxIndex] !== 5 ) {
    for ( let i = 0 ; i < Nombres.length ; i++) {
        if (table[boxIndex] === Nombres[i] ) {
          table[boxIndex] = Nombres[i+1];
          break;
        }
    }
  }
}

export default surroundingsBoxes;