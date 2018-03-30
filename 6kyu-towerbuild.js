function towerBuilder(nFloors) {
  nFloors -= 1
  var res = []
  for(var i=0;i <= nFloors; i++){
    res.push(drawStar(false,nFloors - i)
    + drawStar(true,i * 2 + 1)
    + drawStar(false,nFloors - i))
  }
  return res
}

function drawStar(isStar,repeat){
  var disp = isStar ? '*' : ' ';
  var res = ''

  for(var i=0;i < repeat; i++){
    res += disp
  }

  return res
}



console.log(towerBuilder(1))
console.log(towerBuilder(3))
console.log(towerBuilder(6))


//best practice + most clever
/*
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
*/