// unknown and any are a little different becose any is a simple js variable with it's mutability but unknown is declared as a mutable value but doesn't take it's type for example string
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'facu';


if(typeof userInput === 'string') userName = userInput;

function generateError(message: string, code: number): never {
throw {message: message, errorCode: code}
// while(true) {}
}


generateError('An error occured!', 500);