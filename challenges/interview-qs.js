//Find the symetric difference
function sym(...args) {
    let arr = args.flat().sort();
    let singleArr = [...new Set(arr)];
    let newArr = [];
    
    singleArr.forEach(x => {
      for(let i=0;i<arr.length; i++) {
        if(arr[i] === x) {
          arr.splice(i,1);
        }
      }
    });
    console.log(arr.indexOf);
    console.log(singleArr);
    
    console.log(singleArr.filter(i => {
      i !== arr//match using i?
    }))
  }
  
  sym([1, 2, 3], [5, 2, 1, 4], [1, 2, 6]);