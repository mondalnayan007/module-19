


function sumOfAll(numbers){
    
    let sum = 0;
    for(const num of numbers){
       

        sum = sum + num;

    }
    return sum;
    

}


const numbs = [ 20, 25, 12, 15, 34];
const sum = sumOfAll(numbs);

console.log(sum);