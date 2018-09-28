module.exports = function getZerosCount(number, base) {
  let result = 0;
  let buf = [];
  let multiplier = [];
  let count = [];
  let answer = [];
  let i = 2, prev = 0;

  while (i <= base){
    if (base % i == 0){
      buf.push(i);
      base = base / i;
    }
    else i++;
  }
    
  for (i = 0; i < buf.length; i++) {
    if (buf[i] !== prev) {
      multiplier.push(buf[i]);
      count.push(1);
    } else count[count.length-1]++;

    prev = buf[i];
  }
  
  function maxPowerOf (p, number){
    let k = 0;
    let powerOfP = 1;
    while (true){
      powerOfP *= p;
      let addend = number / powerOfP;
      if (addend === 0) return k;
      k += Math.floor(addend);
    }
  }

  for (i = 0; i < multiplier.length; i++)
    answer.push(Math.floor(maxPowerOf(multiplier[i], number)/count[i]));
  
  Array.min = function(answer){
    return Math.min.apply(Math, answer);
  };

  return result = Array.min(answer);
}