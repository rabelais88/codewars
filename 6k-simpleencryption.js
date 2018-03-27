//6kyu -- Simple Encryption #1 - Alternating Split
const kata = require('./runkata')
const describe = kata.describe
const it = kata.it
const Test = kata.Test

function encrypt(text, n) {
  for(var i=0; i < n; i++){
    text = mover(text)
    console.log(text)
  }
}

function decrypt(encryptedText, n) {
  for(var i=0; i < n; i++){
    text = demover(text)
    console.log(text)
  }
}

function mover(text){
  var resL = []
  var resR = []
  text.split('').map((el,i)=>{
    if (i % 2 === 0){
      resR.push(el)
    }else{
      resL.push(el)
    }
  })
  var res = [...resL,...resR]
  return res.join("")
}

function demover(text){
  var res = []
    text.split("").map((el,i)=>{

    }
  )
}


describe("Solution", function(){
  it("EncryptExampleTests", function(){    
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){    
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});