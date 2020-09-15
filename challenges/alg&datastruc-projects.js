//Q1 Pallindrome
//Check if parameter is a palindrome, but ignore punctuation, case, spacing and non-alphanumeric characters
function palindrome(str) {
    let forward = str.toLowerCase().split(/[^A-Za-z0-9]/).join('');
    let backward = forward.split('').reverse().join('');
    return (forward === backward);
}
  
console.log(palindrome("A man, a plan, a canal. Panama"));

//Q2 Roman Numeral Converter
function convertToRoman(num) {
  let romanNum = [];
  let roman = {
    0: {
      1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
    },
    1: {
      1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC'
    },
    2: {
      1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM',
    },
    3: {
      1: 'M', 2: 'MM', 3: 'MMM'
    }
  };
  let revNum = num.toString().split('').reverse();
  for(let i=0; i<revNum.length; i++) {
    romanNum = [].push(roman[i][revNum[i]]);
  }
  return romanNum.reverse().join('');
}   
console.log(convertToRoman(4));



//Q3 Caesars Cipher
function rot13(str) {
    return str.split('').map(i => {
      var num = i.charCodeAt();
      return (num >= 65 && num <= 77 || num >= 97 && num <= 109) ? String.fromCharCode(num+13)
           : (num >= 110 && num <= 122 || num >= 78 && num <= 90) ? String.fromCharCode(num-13)
           : i;
    }).join('');
}
console.log(rot13("VG'F N-ZR ZNEVB!"));



//Q4 Telephone Number Validator
//My answer without Regex - Limited as it only checks for the number variants listed in the array
function telephoneCheck(str) {
  let numbers = ['555-555-5555', '(555)555-5555', '(555) 555-5555', '555 555 5555', '5555555555', '1 555 555 5555',
  '1(555)555-5555', '1-555-555-5555', '1 (555) 555-5555', '1 555-555-5555'];
  
  let isNum = str.split('').map(i => parseInt(i) ? i = 5 : i);
  
  if (str.split('').filter(x => parseInt(x)).length === 11 && str[0] == 1) {
    isNum[0] = 1;
    return numbers.includes(isNum.join(''));
  } else {
    return numbers.includes(isNum.join(''));
  }
}
console.log(telephoneCheck("1 342-951-5555"));

//Q4 My answer using regex
function telephoneCheck(str) {
  var regex = /^1?[\s]?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
console.log(telephoneCheck("555-555-5555"));



//Q5 Cash Register
//Create a program that will return an object containing a status key & the change amount for the transaction.
//Closed -> Register is empty after transaction, Open -> Change required < Register Total, Insufficient -> Cannot give exact change||Not enough in register.
function checkCashRegister(price, cash, cid) {
  var status = { status: null, change: [] };
  const currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };
  const totalChange = {
    "PENNY": 0,
    "NICKEL": 0,
    "DIME": 0,
    "QUARTER": 0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED": 0
  };
  //Total Change Required
  const change = (cash*100 - price*100)/100;
  var finalChange = change;
  //Total Amount in the register
  var totalRegister = cid.map(x=> x[1]).reduce((cur, acc) => cur + acc);
  //Filter through register from highest to lowest denoms, each time finalChange is reduced, subtract same value from x[1] & add same value to totalChange
  cid.reverse().filter(x => {
    while(x[1] > 0 && finalChange > 0 && finalChange - currency[x[0]] >= 0) {
      x[1] = Math.round((x[1] - currency[x[0]])*100)/100;
      finalChange = Math.round((finalChange - currency[x[0]])*100)/100;
      totalChange[x[0]] = Math.round((totalChange[x[0]] + currency[x[0]])*100)/100;
    }
  });
  //If else for correct output -> CLOSED, OPEN or INSUFFICIENT_FUNDS
  if (change == totalRegister && finalChange === 0) {
    status.status = "CLOSED";
    status.change = Object.entries(totalChange).filter(x => x);
    return status;
  } else if (change < totalRegister && finalChange === 0) {
    status.status = "OPEN";
    status.change = Object.entries(totalChange).filter(x => x[1] > 0).reverse();
    return status;
  } else if (change > totalRegister || finalChange !== 0){
    status.status = "INSUFFICIENT_FUNDS";
    return status;
  }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0.1], ["DIME", 1.5], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));