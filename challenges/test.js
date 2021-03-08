/*
.split('_')
array of words in order
split('')
arr[x[0]].toUpperCase
*/

var sentence = 'home_team_wins';

function split(word) {
    return word.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
}


console.log(split(sentence));