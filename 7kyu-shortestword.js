function findShort(s){
  var words = s.split(" ");
  words.sort(function (a,b) {
    if (a.length > b.length) {
      return 1;
    }else if (a.length < b.length) {
      return -1;
    }else{
      return 0;
    }
  });
  return words[0].length;
}

findShort("bitcoin take over the world maybe who knows perhaps")
findShort("turns out random test cases are easier than writing out basic ones")

/*some best practices

//1
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

//2
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

//3
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

*/