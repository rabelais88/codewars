//7kyu - Jaden Case Strings
String.prototype.toJadenCase = function () {
  return this.split(" ").map(w=>{
    return w.substring(0,1).toUpperCase() + w.substring(1,w.length)
  }).join(" ")
}
/*best practices
//1
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
//2
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};
*/
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

