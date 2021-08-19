// Return the sum of two numbers 
const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(2, 3))

// Convert minutes to seconds 
const minutesToSeconds = (sec) => {
    return sec * 60
}

console.log(minutesToSeconds(6))

// Return the Next Number from the Integer Passed
const nextNumber = (num) => {
    return num + 1
}

console.log(nextNumber(6))

// Area of a Triangle
const areaOfTriangle = (base, height) => {
    const area = (base * height) / 2
    return area
}

console.log(areaOfTriangle(6, 4))

// Convert Age to Days
const ageToDays = (age) => {
    return age * 365
}

console.log(ageToDays(4))

// Return the First Element in an Array
const firstElement = (arr) => {
    return arr[0]
}

console.log(firstElement([13, 5, 6, 23, 4]))

// Find the Perimeter of a Rectangle
const perimeterOfRectangle = (length, width) => {
    const perimeter = (length * 2) + (width * 2)
    return perimeter
}

console.log(perimeterOfRectangle(3, 6))

// Return Something to Me! 
const returnSomething = (message) => {
    return "something " + message
}

console.log(returnSomething("is missing"))

// Is the Number Less than or Equal to Zero? 
const lessThanEqualZero = (num) => {
    if(num > 0) {
        return true
    } else if(num < 0) {
        return false
    } else {
        return "Number is zero"
    }
}

console.log(lessThanEqualZero(0))
