function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number): void {
    console.log('Result ' + num);
    return;
}

function addAndHandle(n1:number, n2:number, cb:(a:number)=> void){
    const result = n1+n2
    cb(result)
}


let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; becose should recive 2 numbers and return a number
// combineValues = 5; wont work becose should be a function

console.log(combineValues(8, 8))

// console.log(typeof printResult(add(5,12)))
// let someValue: undefined;

addAndHandle(10, 20, (result)=>{
    console.log(result)
})