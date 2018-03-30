function towerBuilder(nFloors) {
  var ary = new Array(nFloors).fill().map((el,idx)=>{
    var res = ''
    for(var i=1; i<nFloors * 2; i++){
      if(i < nFloors - idx - 1){
        res += ' '
      }else if(i > nFloors - idx - 1 && i <= nFloors + idx){
        res += '*'
      }else{
        res += ' '
      }
    }
    return res
  })
  return ary
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