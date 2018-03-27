function getCount(str) {
  var vowelsCount = 0;
  str.split('').map(el=>{
    if(/[aeiou]/i.test(el)) vowelsCount ++
  })
  return vowelsCount;
}

/*

//best practice
//1
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

*/