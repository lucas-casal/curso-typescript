function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

const (() => {
    const num1 = Number(prompt("First Number"));
    const num2 = Number(prompt("Second Number"));

    if(!num1 || !num2){
        console.log('faltou um número')
    } else{
        if (isNaN(num1) || !isNaN(num2)){
            console.log('Os valores digitados devem ser números')
        } else{
            let result = sum(num1, num2);
            result += multiply(1,2);
            showResult(result);
        }
    }
    
    
})();




