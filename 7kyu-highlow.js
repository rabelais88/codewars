//7kyu - highest and lowest
function highAndLow(numbers){
  var res = numbers.split(" ").map(el=>{
    return Math.round(el)
  }).sort((a,b)=>{
    return a - b
  })
  return res[res.length - 1] + " " + res[0]
}
//Array.prototype.sort() automatically converts numbers into string
//must use custom compare function in order to do a mathematical comparison
//did conversion two times...big mistake

Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
Test.assertEquals(highAndLow("1 -1"), "1 -1");
Test.assertEquals(highAndLow("1 1"), "1 1");

/*
//best practices
//1
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//2
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
*/