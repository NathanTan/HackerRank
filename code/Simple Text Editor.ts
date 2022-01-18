'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    const queryCount = +readLine()
    const editor = new Editor()
    for (let i = 0; i < queryCount; i++) {
        let op = readLine().split(" ")
        switch (+op[0]) {
            case 1:
                editor.append(op[1])
                editor.log()
                break
            case 2:
                editor.del(+op[1])
                editor.log()
                break
            case 3:
                editor.print(+op[1])
                editor.log()
                break
            case 4:
                editor.undo()
                editor.log()
                break

        }

    }
}



class Editor {
    text = ""
    // previousOperation = ""
    ops = [] as Array<Array<string>>

    log = () => {
        // console.log(`previousOp: ${this.previousOperation}`)
    }

    append = (s: string) => {
        this.text += s
        // this.previousOperation = "append"
        this.ops.push(["append", s])
    }

    del = (k: number) => {

        const buffer = this.text.slice(this.text.length - k)
        const arr = this.text.split("")
        for (let i = 0; i < k; i++) {
            arr.pop()
        }
        this.text = arr.join("")
        this.ops.push(["del", buffer])
    }

    print = (k: number) => {
        console.log(this.text[k - 1]) // To the user the arr starts at 1...
    }

    undo = () => {
        if (this.ops.length !== 0) {
            const op = this.ops.pop()
            if (op[0] === "print")
                return

            if (op[0] === "append") {
                this.del(op[1].length)

            } else if (op[0] === "del") {
                this.append(op[1])

            } else {
                // No previous operations
                return
            }
            this.ops.pop()
        }
    }
}







