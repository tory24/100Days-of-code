//Q1. Find the symetric difference
//Find the differences between two arrays. Then compare the differences with the next array:
//i.e. A= [1,2], B=[2,3] Diff=[1,3], C=[3,4,5] newDiff=[1,4,5] and so on...
function sym(...args) {
  let newArr = [];

  args.forEach(arg => {
    var newArg = [...new Set(arg)];
    newArg.map(num => {
      (!newArr.includes(num) || newArr.length === 0) ?
        newArr.push(num):
        newArr.splice(newArr.indexOf(num),1);
    }); 
  });
  return newArr.sort();
};

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));