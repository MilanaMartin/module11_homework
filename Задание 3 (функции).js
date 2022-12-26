function summFunc(num1){
  return function(num2) {
    return num1 + num2;
  }
}

let func = summFunc(10);
console.log(func(20));

console.log(func);