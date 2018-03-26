//7kyu - Beginner Series #3 Sum of Numbers
function GetSum( a,b )
{
  var res = 0
  for(var i=Math.min(a,b);i<=Math.max(a,b);i++){
    res += i
  }
  
  return res
}

GetSum(0,-1)
GetSum(0,1)

/*
//best practice

//1
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

//2
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

*/