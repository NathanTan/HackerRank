/*
Character Frequency
Complete a function that returns the number of times a given character occurs in the given string.
Note: Please avoid importing libraries like Counter from collections (if using python) to get the correct solution. The interviewer would like to gauge your experience with initializing/populating dictionaries.
Signature
int returnCharNum(string word, char c)
Input
word: a string
c: a character
Note: Assume that the characters are case sensitive (capital letters are interpreted differently than lower case characters).
Output
An int representing the number of occurrences of the input character (c) in the word.
Examples
word: "Mississippi", c: "s"
output: 4 

word: "Rainbow", c: "j" 
output: 0 

word: "Mirror", c: "m"
output: 0

word: "", c: "c"
output: 0 

word: "hello", c: ""
output: 0
Tips: Think about how to solve this without using an imported library, like Counter in collections if using python.
*/
const test1 = {
    word: "Mississippi", c: "s",
    output: 4
}
const test2 = {
    word: "Rainbow", c: "j",
    output: 0
}
const test3 = {
    word: "Mirror", c: "m",
    output: 0
}
const test4 = {
    word: "", c: "c",
    output: 0
}

const test5 = {
    word: "hello", c: "",
    output: 0
}

const returnCharNum = (word: String, ch: String): Number => {
    let count = 0
    word.split("").forEach(c => {
        if (c === ch) {
            count++
        }
    })

    return count
}


{
    let result = returnCharNum(test1.word, test1.c)
    console.log(result)
    console.log(test1.output)
}
{
    let result = returnCharNum(test2.word, test2.c)
    console.log(result)
    console.log(test2.output)
}
{
    let result = returnCharNum(test3.word, test3.c)
    console.log(result)
    console.log(test3.output)
}
{
    let result = returnCharNum(test4.word, test4.c)
    console.log(result)
    console.log(test4.output)
}
{
    let result = returnCharNum(test5.word, test5.c)
    console.log(result)
    console.log(test5.output)
}