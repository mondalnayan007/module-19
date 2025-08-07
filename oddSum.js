
function oddSum(numbers){

    let sum = 0;

    for(const number of numbers){
        if(number % 2 === 1){
            sum = sum + number;
        }
     }
    return sum;

}

const numbs = [11, 23, 56, 88, 33, 90, 53];
const sum = oddSum(numbs);

console.log(sum);