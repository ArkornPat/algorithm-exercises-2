function countPositivesSumNegatives(input) {
  //Start coding here
  let countPos = 0
  let sumNeg = 0
  
  if(!input){
    return []
  }

  for(let i of input){
    if(i > 0){
      countPos += 1
    }else{
      sumNeg += i
    }
  }
  return [countPos,sumNeg]
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
