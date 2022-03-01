/*
Implement a function to check if a sequence of characters can be uniquely mapped to a sequence of words where a character is one of 26 lowercase letters and words are space separated sequences of characters.

Examples: 
"aabb", "cat cat dog dog" → true 
"aabb", "cat cat dog bird" → false 
"aabc", "cat cat dog dog" → false

Assumptions:

The input is well formatted (all lowercase letters, words are always space separated with no leading/trailing white space)
*/

const test1 = {
    a: "aabb",
    b: "cat cat dog dog",
    expected: true
}

const test2 = {
    a: "aabb",
    b: "cat cat dog bird",
    expected: false
}

const test3 = {
    a: "aabc",
    b: "cat cat dog dog",
    expected: false
}


const checkStringPairs = (str1: string, str2: string): boolean => {
    let arr1 = str1.split("")
    let arr2 = str2.split(" ")

    return checking(arr1, arr2) && checking (arr2, arr1)
    
}

const checking = (arr1: string[], arr2: string[]): boolean => {
    let map1 = {} as object

    for (let i = 0; i < arr1.length; i++) {
        // Check if the pair already exists
        // If the key doesn't exists, add it and move on
        //@ts-ignore
        if (map1[arr1[i]]  == null) {
        //@ts-ignore
            map1[arr1[i]] = arr2[i]
        }

        // If the key does exists, check the value
        else {
        //@ts-ignore
            if (!(map1[arr1[i]] === arr2[i])) {
                return false
            }
        }
    }

    return true
}


console.log(test1.expected === checkStringPairs(test1.a, test1.b))
console.log(test2.expected === checkStringPairs(test2.a, test2.b))
console.log(test3.expected === checkStringPairs(test3.a, test3.b))