function checkSimpleNumber(num) { 
  if (typeof (num) === 'number') {
    let str = `Число ${num} не простое`;
    
    if(num===0){
      return "Введен 0";
    }
    if(num===1){
      return `Число ${num} простое`;
    }
    
    let ostDel = 0;    
    for (let i = 2; Math.pow(i,2) < num && ostDel != 1; i++) {
      ostDel = num % i;
    }
    
    if (j === 1) {
      str = `Число ${num} простое`;
    }
  
    
  } else {
    console.log("ошибка, введено не число");
    return null;
  }
  return str;
}

let array = [0, 1, 33, 0, 110, 4, '3', null, 50];
for (let i = 0; i < array.length; ++i) {
  console.log(checkSimpleNumber(array[i]));
}