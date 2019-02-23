function powerDigitSum(num, pow) {
    let sum = Math.pow(num, pow).toString()
    if(pow < 70 ){
      let bil = sum.split('').map(Number)
      return bil.reduce((a, b) => {
        return a+b
      })
    }
    let split = sum.split("e+");
    let first = split[0].replace('.', "");
    let nol = parseInt(split[1], 10) -(first.length - 1)
  
    for(let i = 0; i < nol; i++) {
      first +=0;
    }
    let numArr = first.split('').map(Number)
    return numArr.reduce((a, b) => {
      return a+b
    })
     
  }
  
  // powerDigitSum(2, 15)
console.log(powerDigitSum(2, 15));
console.log(powerDigitSum(2, 1000));