// задача по созданию массива от start до end с шагом step
// и вычисление суммы элементов массива

var arr = [];
var summ = 0;

function range(start, end, step) {
  let begin = start;
  
  if (start > end) {
    for (var i = 0; i <= (begin-end)/(-step); i++) {
      arr.push(start);
      start += step;
    }
  }  else if (start < 0) {
    for ( i = 0; i <= (end-begin)/step; i++) {
      arr.push(start);
      start += step;
    }
  } else if (start < end) {
    for ( i = 0; i < end/step; i++) {
      arr.push(start);
      start += step;
    }
  }
  return arr;
} // end range

function sumElem() {
  for (var j = 0; j < arr.length; j++) {
    summ += arr[j];
  }
  return summ;
}

console.log(range(1, 10, 2));
console.log(sumElem());