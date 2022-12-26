function printIntervalSec(start, finish) {
  let str = "";
  for (let i = start; i <= finish; i++) {
    str += " " + i;
  }
  console.log(str);
}

setInterval(printIntervalSec, 1000, 10, 20);