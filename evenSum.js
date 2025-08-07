

function evenSum(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
                sum = sum + number;
        }
    }
    return sum;
}


const numbs = [24, 55, 43, 66, 90, 87, 36];

const total = evenSum(numbs);

console.log(total);