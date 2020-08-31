//Intermediate Algorithm Challenges
//
//Q1 Spinal Tap
function spinalCase(str) {
  return str.trim('').split(/(?=[A-Z])|[^A-Za-z]/g).filter(Boolean).join('-').toLowerCase();
}
console.log(spinalCase('ThisIsSpinalTap'));

/* I decided to use Google for help, but I need to understand why certain methods were being used:
* .trim('')       -> Will trim any blankspaces from either side of the string
* .split():
  - (?=[A-Z])     -> This uses '?=' a positive lookahead, which will split at each capital letter '[A-Z]'.
  - '|' -> The or operator.
  - [^A-Za-z]/g   -> This will split the string at anything that isn't a letter. Could also be written
    as '\W'. The 'g' is the global flag, which searches for more than just the first match.
* .filter(Boolean)-> Removes any empty array elements, so double spaces between words are ignored.
* .join('-')      -> This will join the array of words with hyphens.
* .toLowerCase()  -> Will change every letter in the string to lowercase.
*/

//Q2 Pig Latin
function translatePigLatin(str) {
  return (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u') ?
        str.concat('way') :
        str.split(/([aeiou].*)/).reverse().concat('ay').join('');
}
console.log(translatePigLatin("eight"));

/* This first checks if the str[0] is equal to a vowel. If so, then add 'way' to the end of the word.
* If it is a consonant:
- .split(/([aeiou].*)/)  -> Split at the first instance of a vowel
- Reverse the array so the consonants move to the end of the array
- .concat('ay')   -> Add 'ay' to the end of the array, then join('') to form a string.

E.g: schwartz -> ['schw' 'artz'] -> ['artz' 'schw'] -> ['artz' 'schw' 'ay'] -> 'artzschway'
*/

//Q3 Wherefore art thou
function whatIsInAName(collection, source) {
  var arr = [];
  //Keys is equal to the key of the source obect ('last')
  var keys = Object.keys(source);
  // Filter Collection, creating a new array 'arr' that contains the objects that contain the same 
  //key from 'source'
  arr = collection.filter(obj => {
    //Use .every() method to check every key from collection.
    return keys.every(key => {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    })
  });

  return arr;
};

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/* We filter through each obect in 'collection',
Then we check if any obect has 'every' key:value pair in source.
- This is determined by the final line, ob.hasOwnProperty(key) => last, obj[key] = "Capulet"
If true, then that object will be passed through to 'arr'
*/

//Q4 Search & Replace
function myReplace(str, before, after) {
  //Change first letter of after to uppercase
  let upperAfter = after.replace(after[0], after[0].toUpperCase());
  //If the before word is uppercase, replace with upperAfter, else just replace with after.
  return (before[0] == before[0].toUpperCase()) ?
          str.replace(before, upperAfter) :
          str.replace(before, after.toLowerCase());
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));

//Q5. DNA Strand - Create a 2D array with corresponding pairs, based on given string.
//Pairs, [A,T], [T],A], [C,G], [G,C] -> ACG => [A,T], [C,G], [G,C]
function pairElement(str) {
  let newArr = [];
  str.split('').map(letter => {
    if (letter === 'A') {
      return [letter, 'T'];
    } else if (letter === 'T') {
      return [letter, 'A'];
    } else if (letter === 'C') {
      return [letter, 'G'];
    } else {
      return [letter, 'C'];
    }
  })
  return newArr;
}
console.log(pairElement("ACG"));


//Q6. Missing Letters
function fearNotLetter(str) {
  let newArr = [];
  //Convert array to ASCII
  let numbers = str.split('').map(num => num.charCodeAt(0));
  //Fill newArr with the full range of letters by ASCII code.
  for (let i = numbers[0]; i <= numbers[numbers.length -1]; i++) {
    newArr.push(i);
  };
  //If the two arrays are not identical return undefined, else return the missing character.
  return (newArr.join('') === numbers.join('')) ?
    undefined :
    String.fromCharCode(newArr.filter(x => !numbers.includes(x)));
}
fearNotLetter("abcde");

//Alternate answer that I almost got, but did not work as I checked 'if(numbers[i] !== numbers[i+1])' 
//-> It would return the letter after the final letter, i.e. 'f' in this example.
function fearNotLetter(str) {
  let numbers = str.split('').map(num => num.charCodeAt(0));
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] - numbers[i+1] < -1) {
      return String.fromCharCode(numbers[i]+1);  
    }
  }
}
console.log(fearNotLetter("abcde"));


//Q7. Sorted Union
function uniteUnique(arr) {
  let finalArr = [];
  
  for(var i = 0; i < arguments.length; i++) {
    let newArr = [].concat(arguments[i]).filter(x => {
      if (!finalArr.includes(x)) {
        finalArr.push(x);
      }
    })
  };
  return finalArr;
};

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//One of the suggested Answers -> Uses 'Set' - Clears any duplicates in a 1D Array
function uniteUnique(...arrays) {
  const flatArray = [].concat(...arrays);
  return [...new Set(flatArray)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//Q8 Convert HTML Entities
function convertHTML(str) {
  let newArr = [];
  let obj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  str.split('').filter(letter => {
    (obj.hasOwnProperty(letter)) ?
      newArr.push(obj[letter]) :
      newArr.push(letter);
  });
  return newArr.join('');
}

console.log(convertHTML("Dolce & Gabbana"));

  //The best suggested answer
  function convertHTML(str) {
    let obj = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    };
    return str.split('').map(letter => obj[letter] || letter).join('');
  }
  console.log(convertHTML("Dolce & Gabbana"));


  //Q9 Summ All Odd Fibonacci Numbers under the argument
  function sumFibs(num) {
    let fib = [1, 1];
    let i = 1;
    while(fib[i] < num){
      fib.push(fib[i]+fib[i-1]); i++;
    }
    return fib.filter(x=> x%2!== 0 && x<=num).reduce((a,b)=>a+b);
    
  }
  
  console.log(sumFibs(1000));  //Output: 1785

  //Q10 Sum Primes Numbers
  function sumPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) primes.push(i);
    
    return primes.filter(x=> {
      for(let i = 2; i < x; i++)
        if (x % i === 0) return false;
        return num > 1;
    }).reduce((a,b)=> a+b);
  }
  
  console.log(sumPrimes(977));

/* This is the only way I could think of tackling this question, in terms of speed of code, I dont yet know much about what methods are faster or slower, and how
scalable my code has been, but that's something I'm sure I will eventually learn, once I have experience
*/


//Q11 Smallest Common Multiple
function smallestCommons(arr) {
  //Sort the arguments largest to smallest then create an array of the span between numbers
  let primes = [...arr].sort((a,b)=>b-a);
  for(let i = primes[0]-1; i > primes[1]; i--) primes.push(i);
  //Make x equal to the greatest number in the array (as it will require the least number of loops)
  let x = primes[0];
  //While every number in primes does not divide into x, x += primes[0]
  while (primes.every(num => x % num===0) === false) {
    x += primes[0];
  }
  //When true, return the final value of x
  return x;
}

smallestCommons([1,13]);

//Q12 Drop It - Iterate through, removing elements until the first instance of true, return array from there.
function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      break;
    } else {
      arr.shift();
      i--;
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });

//Q13 Flatten Array without .flat or .flatMap
//Was a challenge, almost had it without help, ended up altering the same function but used Array.isArray() method
//Was interesting as it required the use of recursion, which I think I understand now.
function steamrollArray(arr) {
  let newArr = [];
  var flatten = value => value.forEach(x => {
    (Array.isArray(x) === false) ?
      newArr.push(x):
      flatten(x);
  });
  flatten(arr);
  return newArr;
}

steamrollArray([ 'a', {}, [ 3, [[[6]]] ] ]);


//Q14 Everything Be True - Every Key that matches 'pre' must have a truthy value.
function truthCheck(collection, pre) {
  return collection.every(i => !!i[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": NaN}, {"user": "Po", "sex": "female"}], "sex");
//Looked at the solution and realised the !! double negative wasn't necessary. But this was my solution^


//Q15 Arguments Optional - Create a function that sums 2 arguments together so long as they are both numbers. If 1 argument is given, or either argument is not a number
//return 'undefined'.
//My solution works for 5/6 tests FCC asks for, I was unable to create a check for a single argument, regardless of whether it was a number or not.
function addTogether(x, y) {
  if (arguments.length === 1) {
    return function(y) {
      if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        return undefined;
      }
      return x + y;
    };
  } else if (typeof(x) !== 'number' || typeof(y) !== 'number') {
    return undefined;
  }
  return x + y;
}

console.log(addTogether(4,5));

//Q16 Make a Person
var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  },
  this.getLastName = function() {
    return fullName.split(' ')[1];
  },
  this.getFullName = function() {
    return fullName;
  },
  this.setFirstName = function(first) {
    fullName = first + ' ' + fullName.split(' ')[1];
  },
  this.setLastName = function(last) {
    fullName = fullName.split(' ')[0] + ' ' + last;
  },
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }
};

var bob = new Person('Bob Ross');
bob.setFirstName('Haskell');
console.log(bob.getFullName());

//Q17 Map The Debris -> Find the Orbital Period of each given property in an object, and replace avgAlt with its orbital period
//Was finicky at first trying to change the key-value to the new one. I initially tried replacing it, but found adding then deleting worked better.
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(i => {
    i['orbitalPeriod'] = Math.round((2 * Math.PI) * Math.sqrt((Math.pow(i.avgAlt + earthRadius, 3)) / GM));
    delete i.avgAlt;
    return i;
  })
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}]);