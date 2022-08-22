// ASSESSMENT 3: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// Psuedo code
// Create a describe code block for test - 
// Will take in a function - call it fibSequence
// it - returns an array of that length(?) containing the numbers of Fibonacci sequence
// expect - [1, 1, 2, 3, 5, 8], - [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// 
// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    describe("fibSequence", () => {
        it("returns an array that length containing the numbers of Fibonacci sequence.", () => {
            expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
            expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
    })



 FAIL  ./code-challenges.test.js
  ● Test suite failed to run

    ReferenceError: fibSequence is not defined

      27 | // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
      28 |
    > 29 |     describe(fibSequence, () => {
         |              ^
      30 |         it("returns an array that length containing the numbers of Fibonacci sequence.", () => {
      31 |             expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      32 |             expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

      at Object.fibSequence (code-challenges.test.js:29:14)

// Test Suites: 1 failed, 1 total
// b) Create the function that makes the test pass.

// Psuedo code
// Create my func named fibSequence
// It will take in fibLength1,2 as a argument 
// Using Fibonacci Sequence - is a series of numbers starting at 0 and 1. next numb is previous 2 numbers added up
// Pass value into parameter
// Array must be size of num in fibLength
// fibL1 is = 6 so it must contain 6 values
// Create a new var with empty array or .map() to create new Array?
// Need to start at 0 and 1.
//  create an Array of 0,1 for starting points in Fib. 
// create a loop but I already have 0,1. So start at 2
//  I want to push the new numbers into my array .push()
// Forgot I don't want 0 in my array, so I need to .slice() it out
// add slice to return
// output
// [1, 1, 2, 3, 5, 8]
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


const fibSequence =  (num) => {
let fibArr = [0,1]
 for (let i = 2; i <= num; i++) {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1])
        } return fibArr.slice(1)


}

 PASS  ./code-challenges.test.js
  fibSequence
    ✓ returns an array that length containing the numbers of Fibonacci sequence. (5 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.569 s, estimated 1 s

// console.log(fibSequence(fibLength1))
// console.log(fibSequence(fibLength2))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
// create describe code block to test
// take in func of onlyOddNum
// it - takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// expect - [-9, 7, 9, 199] - [-823, 7, 23]
const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("onlyOddNum", ()=> {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        expect(onlyOddNum(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddNum(fullArr2)).toEqual([-823, 7, 23])
    })
})

 FAIL  ./code-challenges.test.js
  onlyOddNum
    ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)

  ● onlyOddNum › takes in an array and returns a new array of only odd numbers sorted from least to greatest.

    ReferenceError: onlyOddNum is not defined

// b) Create the function that makes the test pass.

//Psuedo Code
// create func named onlyOddNum
// create a variable to store new arr
// I only want odd numbers and need to be sorted from least to greatest.
// .filter through fullArr variables  to find odd numbers -
// use type of to find all my numbers
// once i get my nums i need to find odd nums only, so use % 
// value % 2 !== 0 will find my odds
// sort them from least to greatest. - use .sort? 
// used .sort() to get them from least to greatest 


const onlyOddNum = (array) => {
   let getNums = array.filter((value)=> 
        typeof value  === 'number' && value % 2 !== 0) 
    return getNums.sort((a,b) => a-b)
    
 } 
// console.log(onlyOddNum(fullArr1))
// console.log(onlyOddNum(fullArr2))

 PASS  ./code-challenges.test.js
  onlyOddNum
    ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (2 ms)

// Had issue with it returning a blank array because I used {} after my arrow func in .filter()
// good example I just found of an implicit return also ^


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// describe will take in my func named "accSum"
// it - takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// expect - [2, 6, 51, 60] - [0, 7, -1, 11] - []

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("accSum", () => {
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accSum(numbersToAdd3)).toEqual([])
    })
})


 FAIL  ./code-challenges.test.js
  accSum
    ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)

  ● accSum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

    ReferenceError: accSum is not defined

      152 | describe("accSum", () => {
      153 |     it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    > 154 |         expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
          |         ^
      155 |         expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
      156 |         expect(accSum(numbersToAdd3)).toEqual([])
      157 |     })

// b) Create the function that makes the test pass.

//Psuedo code
// Make a function named accSum
// input numberstoAdd1,2,3
// Need to add previous 2 indexes to create next index
// So 2 + 4 = 6... 6 + 45 = 51
// create a for loop to iterate through array, needs to start at 2nd index. (1)
// add current number at that index + previous index 
// will return the total --> iterates through all nums 

// input 
// output: [2, 6, 51, 60], [0, 7, -1, 11], []

 // [2, 4, 45, 9]

const accSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1]
    } return nums 

}
// so first loop will start at 4, nums[i] = 4. 4 + [nums i = 1] this will take previous index. which is 2. so 4 + 2 = 6.
// console.log(accSum(numbersToAdd1))
// console.log(accSum(numbersToAdd2))
// console.log(accSum(numbersToAdd3))

 PASS  ./code-challenges.test.js
  accSum
    ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.431 s, estimated 1 s


 // Another way I found to do it, much shorter but don't think i could've came up with this on my own.
// const accSum = (array) => {
//     let addNums = array.map((sum = 0, n => sum += n)) 
//         return addNums 
// }
// console.log(accSum(numbersToAdd1))
// console.log(accSum(numbersToAdd2))
// console.log(accSum(numbersToAdd3))