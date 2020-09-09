const _ = {
    clamp(number, lower, upper) {
      return Math.min(Math.max(number, lower), upper);
    },
    inRange(num, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      } else if (start > end) {
        return !(start <= num && num < end) ? true : false;
      }
      return (start <= num && num < end) ? true : false;
    },
    words(string) {
      return string.split(' ');
    },
  
    pad(string, length) {
      if(string.length >= length) {
        return string;
      }
      const leftPad = Math.floor((length-string.length)/2);
      const rightPad = length - string.length - leftPad; 
      const spaced = ' '.repeat(leftPad) + string + ' '.repeat(rightPad);
      return spaced;
    },
  
    has(obj, key) {
      return !!obj[key];
    },
  
    invert(obj) {
      let newObj = {};
      for(let key in obj) {
        newObj[obj[key]] = key; 
      }
      return newObj;
    },
  
    findKey(obj, predicate) {
      for(let key in obj) {
        return (!!predicate(obj[key])) ? key : undefined;
      }
    },
  
    drop(arr, num) {
      return (!num) ? arr.slice(1) : arr.slice(num);
    },
  
    dropWhile(arr, predicate) {
      return arr.slice(arr.findIndex(elem => !predicate(elem, arr.indexOf(elem), arr)));
    },
  
    chunk(arr, size){
      let newArr = [];
      for(let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }
  };
  
  
  
  
  