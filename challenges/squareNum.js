//Take an array and find the square all positive whole numbers
//First attempt
const squareList = (arr) => {
    let newArr = [];
    return newArr = arr.filter(num => num > 0 && num % 1 === 0).map(num => num * num);
  }
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);