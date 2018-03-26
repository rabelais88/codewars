function duplicateEncode(word){
  var res = word.toLowerCase()
  var appeared = {}
  for(var i=0;i<res.length;i++){
    var curChar = res.charAt(i)
    if(!appeared[curChar]){
      appeared[curChar] = "("
    }else{
      appeared[curChar] = ")"
    }
  }

  var res2 = ""
  res.split("").forEach(elRes=>{
    res2 += appeared[elRes]
  })
  return res2
}

duplicateEncode("din") // "((("
duplicateEncode("recede") // "()()()"
duplicateEncode("Success") // ")())())"
duplicateEncode("(( @") //"))(("

/*best practice

//1
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
//2
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

*/