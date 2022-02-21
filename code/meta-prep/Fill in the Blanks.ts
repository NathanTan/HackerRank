/*
Fill in the Blanks
Given an array containing null values fill in the null values with most recent non-null value in the array.
Signature
integer[] returnFilledArray(integer[] input_lst)
Input
Array of integers and/or null values
Output
Array of integers and/or null values
Examples
input:  [1,null,2,3,null,null,5,null]
output: [1, 1, 2, 3, 3, 3, 5, 5]

input: [null,8,null]
output: [null, 8, 8]

input: [1,null,2]
output: [1,1,2]

input: [5,null,null]
output: [5,5,5]

input: [1,null,2,3,null,null,5,null]
output: [1,1,2,3,3,3,5,5]
*/

const test1 = {
    input: [1, null, 2, 3, null, null, 5, null],
    output: [1, 1, 2, 3, 3, 3, 5, 5]
}
const test2 = {
    input: [null, 8, null],
    output: [null, 8, 8]
}
const test3 = {
    input: [1, null, 2],
    output: [1, 1, 2]
}
const test4 = {
    input: [5, null, null],
    output: [5, 5, 5]
}
const test5 = {
    input: [1, null, 2, 3, null, null, 5, null],
    output: [1, 1, 2, 3, 3, 3, 5, 5]
}

const returnFilledArray = (input: Array<Number | null>): Array<Number | null> => {

    let lastValue = null
    let output = [] as Array<Number | null>

    for (let i = 0; i < input.length; i++) {

        // Inital set
        if (input[i] != null) {
            // Update the lastValue
            lastValue = input[i]
        }

        output.push(lastValue)
    }
    return output
}


{
    console.log("Test 1")
    let result = returnFilledArray(test1.input)
    console.log(result)
    console.log(test1.output)
} {
    console.log("Test 2")
    let result = returnFilledArray(test2.input)
    console.log(result)
    console.log(test2.output)
} {
    console.log("Test 3")
    let result = returnFilledArray(test3.input)
    console.log(result)
    console.log(test3.output)
} {
    console.log("Test 4")
    let result = returnFilledArray(test4.input)
    console.log(result)
    console.log(test4.output)
} {
    console.log("Test 5")
    let result = returnFilledArray(test5.input)
    console.log(result)
    console.log(test5.output)
}