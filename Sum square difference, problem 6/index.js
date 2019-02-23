function multiple(num) {
    let i, arr = [], arr2 = [];
    for(i = 1; i <= num; i++){
      arr.push(Math.pow(i, 2))
      arr2.push(i)
    }
    arr = (arr.reduce((a, b) => {
      return a + b
    }))
    arr2 = (arr2.reduce((a, b) => {
     return a + b
    }))
    return Math.pow(arr2, 2) - arr
}

console.log(multiple(10))