/*
Given an array of random unique numbers from 1-20.
Q1. What is the longest consecutive streak in the array.
Q2. If there is one, what is the length of the streak that ends with the highest number in the list.
*/

const findStreak = arr => {
    var currStreak = 1;
    var longestStreak = 0;
    //Q1. Longest Streak in array
    arr.forEach(i => {
        (arr[arr.indexOf(i)+1] - i === 1) ? currStreak++ : currStreak = 1;
        (currStreak > longestStreak) ? longestStreak = currStreak : null;
    });
    console.log(`Longest Streak: ${longestStreak}`);
    
    //Q2. Streak to final number
    console.log(`Streak to highest number: ${arr.sort((a,b) => b-a).findIndex(i => (i - arr[arr.indexOf(i)+1] !== 1))+1}`);
}

findStreak([1, 2, 3, 5, 6]);

/*
const findStreak = arr => {
    var currStreak = 1;
    var longestStreak = 0;
    var streakArr = [];
    var longestStreakArr = [];

    let sortedArr = arr.sort((a,b) => a-b);
    for(let i=0; i<sortedArr.length; i++) {
        if(sortedArr[i+1]-sortedArr[i] === 1) {
            currStreak++;
            streakArr.push(sortedArr[i], sortedArr[i+1]);
            if(currStreak > longestStreak) {
                longestStreak = currStreak;
                longestStreakArr = streakArr;
            }
        } else {
            currStreak = 1;
            streakArr = [];
        }
    }
    let finalArr = [...new Set(longestStreakArr)];
    console.log(finalArr[0], finalArr.slice(-1)[0]);
    console.log(finalArr);
    console.log(longestStreak);
}

findStreak([2, 4, 5, 6, 7, 12, 14, 15, 16, 17, 18, 19, 20]);
*/