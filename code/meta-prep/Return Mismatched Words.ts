/*
Return Mismatched Words
Given an input of two strings consisting of english letters (a-z; A-Z) and spaces, complete a function that returns a list containing all the mismatched words (case sensitive) between them.
You can assume that a word is a group of characters delimited by spaces.
A mismatched word is a word that is only in one string but not the other.
Add mismatched words from the first string before you add mismatched    
words from the second string in the output array.
Signature 
static String[] returnMismatched(String str1, String str2)
Input
str1: a string
str2: a string
Note: You can only expect valid english letters (a-z; A-Z) and spaces.
Output
An array containing all words that do not match between str1 and str2.
Examples
str1: "Firstly this is the first string"
str2: "Next is the second string"
output: ["Firstly", "this", "first", "Next", "second"]

str1: ""
str2: ""
output: []

str1: ""
str2: "This is the second string"
output: ["This","is","the","second","string"]

str1: "This is the first string" 
str2: "This is the second string" 
output: ["first", "second"]

str1: "This is the first string extra" 
str2: "This is the second string" 
output: ["first", "extra", "second"]

str1: "This is the first text" 
str2: "This is the second string" 
output: ["first", "text", "second", "string"]
*/

const string1 = "Firstly this is the first string"
const string2 = "Next is the second string"
const test1 = {
    str1: "Firstly this is the first string",
    str2: "Next is the second string",
    output: ["Firstly", "this", "first", "Next", "second"]
}

const test2 = {

    str1: "",
    str2: "",
    output: []
}
const test3 = {
    str1: "",
    str2: "This is the second string",
    output: ["This", "is", "the", "second", "string"],
}
const test4 = {
    str1: "This is the first string",
    str2: "This is the second string",
    output: ["first", "second"]
}
const test5 = {

    str1: "This is the first string extra",
    str2: "This is the second string",
    output: ["first", "extra", "second"]
}
const test6 = {

    str1: "This is the first text",
    str2: "This is the second string",
    output: ["first", "text", "second", "string"]
}

const returnMismatched = (str1: String, str2: String): Array<String> => {

    const list = [] as Array<String>

    // Prep data
    const arr1 = str1.split(" ")
    if (arr1[0] === '') arr1.pop()
    const arr2 = str2.split(" ")
    if (arr2[0] === '') arr2.pop()
    const fullList = arr1.concat(arr2)
    const deduppedFullList = fullList.filter((s, index) => {
        return fullList.indexOf(s) === index
    })

    // Find mismatches
    deduppedFullList.forEach((s) => {
        if (!(arr1.indexOf(s) > -1 && arr2.indexOf(s) > -1)) {
            list.push(s)
        }
    })

    return list
}



{
    console.log("Test 1")
    let result = returnMismatched(test1.str1, test1.str2)
    console.log(result)
    console.log(test1.output)
} {
    console.log("Test 2")
    let result = returnMismatched(test2.str1, test2.str2)
    console.log(result)
    console.log(test2.output)
} {
    console.log("Test 3")
    let result = returnMismatched(test3.str1, test3.str2)
    console.log(result)
    console.log(test3.output)
} {
    console.log("Test 4")
    let result = returnMismatched(test4.str1, test4.str2)
    console.log(result)
    console.log(test4.output)
} {
    console.log("Test 5")
    let result = returnMismatched(test5.str1, test5.str2)
    console.log(result)
    console.log(test5.output)
} {
    console.log("Test 6")
    let result = returnMismatched(test6.str1, test6.str2)
    console.log(result)
    console.log(test6.output)
}