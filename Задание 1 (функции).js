function checkEvenNumber(number){
    let str = 'array[' + i + ']';
    if (typeof (array[i]) == 'number') {
      if (array[i] === 0) {
        str += ' это ноль';
      } else {
        if (array[i] % 2 === 0) str += ' четное'
        else {
          str += ' нечетное'
        }
      }
    } else {
      if (array[i] === null) {
        str += ' это пустота'
      } else {
        str += ' это ' + typeof (array[i]);
      }
    }
    return str
}

let array = [0, 1, 2, 0, '1', '3', null, 4];
for (let i = 0; i < array.length; ++i) {
  console.log(checkEvenNumber(array[i]));
}