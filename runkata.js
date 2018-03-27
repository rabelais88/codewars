module.exports = {
  describe (arg,fun){
    console.log(arg)
    fun()
  },

  it(arg,fun){
    console.log(arg)
    fun()
  },

  Test:{
    assertEquals(fun,res){
      var finalRes = false
      if(fun === res){
        finalRes = true
      }
      console.log(`result: ${fun} =?= ${res} => ${finalRes}`)
    }
  }
}