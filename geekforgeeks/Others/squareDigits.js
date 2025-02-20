function squareDigits(num){
    //   var myArr = String(num).split("").map((num)=>{
    //   return Number(num)
    // })
      let numsArr = Array.from(String(num), Number);
      numsArr= numsArr.map(digit => Math.pow(digit, 2));
      let x= numsArr.toString();
      x= parseFloat(x.replace(/,/g, ''));
      return Number(x);
    }

squareDigits(123);

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}