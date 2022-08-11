type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text'

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescription
      ){
    // if (typeof n1 !== 'number' || typeof n2 !== 'number' ) {
    //     throw new Error('Incorrect input!')
    // }
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
     result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString()
    }

    // if(resultConversion === 'as-number'){
    //     return +result;
    // }else{
    //     return result.toString()
    // }
    return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges, typeof combinedAges);

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges, typeof combinedStringAges);


const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames, typeof combinedNames)