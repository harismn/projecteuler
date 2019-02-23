function multiple(num) {
    let i, arr = [];
    for(i = 1; i < num; i++){
      if(i % 3 == 0 || i % 5 == 0){
        arr.push(i)
      }
    }
    return (arr.reduce((a, b) => {
      return a + b
    }))
}

console.log(multiple(1000))
console.log(multiple(10))