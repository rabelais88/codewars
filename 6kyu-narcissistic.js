function narcissistic( value ) {
  var res = 0
  var ls = value.toString().split("")
  ls.map(el=>{
    res += Math.pow(Math.floor(el),ls.length)
    console.log(`${el} ^ ${ls.length} = ${res}`)
  })
  console.log(res)
  if(res === value) return true
  return false
}
console.log(narcissistic( 7 ))
console.log(narcissistic( 371 ))

/*

//best practice
function narcissistic( value ) {
  return ('' + value).split('').reduce(function(p, c){
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

//most clever
function narcissistic( value ) {
  var remaining = value,
      digits = [],
      solution = 0;
  while (remaining > 0) {
    digits.push(remaining % 10);
    remaining = Math.floor(remaining / 10);
  }
  
  return value == digits.reduce(function(p,n) {
    return p + Math.pow(n,digits.length);
  },0);
}

*/