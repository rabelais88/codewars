
// Codeswars 7kyu - Isograms
function isIsogram(str){
  var str = str.toLowerCase();
  var appeared = {};
  var iso = false;
  for(var i=0;i<str.length;i++){
    var curChar = str.charAt(i);
    if(!appeared[curChar]){
      appeared[curChar] = 1;
    }else{
      appeared[curChar] ++;
      iso = true;
    }
  }
  return iso;
}

console.log(isIsogram("abc"));

//best practice was to use regex