let str="MCDLXXVI";    //M=1000, CD=400, LXX=70, VI=6

var romanToInt = function(s) {
    const sym = { 
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (i=0; i < s.length; i++){
      const cur = sym[s[i]];
      const next = sym[s[i+1]];

      if (cur < next){
          result += next - cur 
          i++
      } else {
          result += cur
      }
  }

  return result; 
};

console.log(romanToInt(str));

//Dry run:
//1000(M) < 100(C) wrong ==> C(100) < 500(D) correct (500 - 100=400) and so on..