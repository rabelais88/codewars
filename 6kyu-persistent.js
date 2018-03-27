function persistence(num) {
  //code me
  console.log("input",num)
  var total = 0
  while(num >= 10){
    total ++
    var res = 0
    num.toString().split("").map((el,i)=>{
      res = (i === 0) ? Math.floor(el) : res * Math.floor(el)
    })
    num = Math.floor(res)
  }
  return total
}
persistence(39) //3
persistence(4) //0
persistence(25) //2
persistence(999) //4

/*
//best practice

//1
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

//most clever
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}

*/