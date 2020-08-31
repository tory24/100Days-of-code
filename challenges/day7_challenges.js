//Q1: Sum of all all values between 2 data points in an array
//While not the shorted or most concise answer, it also will add the two values if there are equal to eachother
function sumAll(arr) {
    var sorted = arr.sort((a,b)=>a-b);
    if(sorted[0] === sorted[1]) {
      return sorted[0] + sorted[1];
    } else {
      while(sorted[0] < sorted[1]-1) {
      sorted.push(sorted[0]++);
    }
    return sorted.reduce((acc, val) => acc + val);
    }
  };

  console.log(sumAll([4,1]));

//Q2: Diff Two Arrays
//This took me a while to understand why what I was trying to do wouldn't work
function diffArray(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
      for(let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr1.splice(i, 1); i--;
          arr2.splice(j, 1); j--;
        }
      }
    }
    let newArr = [...arr1, ...arr2];
    return newArr;
  };
  
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //=> Output: ['piglet', 4] 

  
  //Best of the suggested answers
  function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //=> Output: ['piglet', 4]