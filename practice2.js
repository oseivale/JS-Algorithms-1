// Add up the Numbers from a Single Number
const addUp = (num) => {
    sum = 0
    i = 0
    while(i <= num) {
        sum += i
        i++
    }

    return sum
}

console.log(addUp(600))

// Matchstick Houses

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

const matchStickHouses = (step) => {
    let matchSticks;
    let count;
    if(step === 1) {
        matchSticks = 6
    } else if(step > 1){
        count = step - 1
        matchSticks = 6 + (count * 5)
    } else {
        matchSticks = 0
        return matchSticks
    }
    return matchSticks
}

console.log(matchStickHouses(4))