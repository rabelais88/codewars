function findMissingLetter(array)
{
  var aryCode = array.map(el=>{
    return el.charCodeAt(0)
  })
  var res = false
  //math.min and max only takes multiple argument as valid value.
  //single value linked to an array doesn't work
  console.log(aryCode)

  for(var i=Math.min(...aryCode);i<Math.max(...aryCode);i++){
    if(aryCode.indexOf(i) === -1) {
      console.log(i)
      return String.fromCharCode(i)
    }
  }
}

findMissingLetter(['a','b','c','d','f'])
findMissingLetter(['O','Q','R','S'])

/*
//best practices

//1
//this is not method oriented, but goal oriented best
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}

//2
//this uses only vanilla(no ES2015) to solve
function findMissingLetter(letters) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
      return String.fromCharCode(letters[i].charCodeAt() + 1);
    }
  }
}
*/