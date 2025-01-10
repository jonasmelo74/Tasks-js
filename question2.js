const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    if (num === a || num === b) return true;

    let next = a + b;
    while (next <= num) {
        if (next === num) return true;
        a = b;
        b = next;
        next = a + b;
    }

    return false;
}

rl.question("Digite um número: ", (input) => {
    const number = parseInt(input);

    if (isFibonacci(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }

    rl.close();
});
