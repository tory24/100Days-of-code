//Q1
//Use Split() to seperate the string into an array of words only.

function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code"));
//Referred to my notes


//Q2
function sentensify(str) {
  let newStr = [...str].join('');
  return newStr.split(/\W/).join(' ');
}
sentensify("May-the-force-be-with-you");

//Suggested Answer:
//Did not realise .split does not mutate the original string
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");


//Q3
//Use the methods learnt (split, map, reduce, join) to create hyphenated urls of strings
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.toLowerCase().split(' ').filter(space => space != '').join("-");
}
urlSlug(globalTitle);

//Suggested Answer
//Realising regex can help a lot to simplify code for a cleaner look
// /\s+/ will split at any whitespaces, even those that occur one or more times '+'
function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/).join("-");
}