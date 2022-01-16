'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix: number[][]): number {
    // Write your code here
    let finalSum = 0
    
    // Create the groups dynamically
    const n = matrix.length / 2
    let groups = [] as Array<Array<number>>
    for (let i=0; i < n * n; i++) 
        groups.push([] as Array <number>)
        
    // You actually don't need to store the groups
    for (let i=0; i < n * n; i++) {
        let group = [] as Array<number>
        
        // Trust in the math
        group.push(matrix[Math.floor(i / n)][i % n])
        group.push(matrix[Math.floor(i / n)][(2 * n) - 1 - (i % n)])
        group.push(matrix[(2 * n) - 1 - Math.floor(i / n)][i % n])
        group.push(matrix[(2 * n) - 1 - Math.floor(i / n)][(2 * n) - 1 - (i % n)])
        group.sort((a, b) => {return b - a}) // Set the largest to the 0th position
        
        finalSum += group[0]
    }
    
    return finalSum
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const q: number = parseInt(readLine().trim(), 10);

    for (let qItr: number = 0; qItr < q; qItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        let matrix: number[][] = Array(2 * n);

        for (let i: number = 0; i < 2 * n; i++) {
            matrix[i] = readLine().replace(/\s+$/g, '').split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
        }

        const result: number = flippingMatrix(matrix);

        ws.write(result + '\n');
    }

    ws.end();
}
