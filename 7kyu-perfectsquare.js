function findNextSquare(sq) {
  var x = Math.sqrt(sq);
  var y = Math.pow(x+1,2);
  return  (x - ~~x === 0) ? y : -1;
}

console.log(findNextSquare(144));
console.log(findNextSquare(114));

//the best practice is