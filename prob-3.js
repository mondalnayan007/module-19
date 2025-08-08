// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



function make_avg(numbers){

    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    const avg = sum / numbers.length;
    return avg;
    

}

const numbs = [23, 67, 89, 40, 56, 45];
const avg = make_avg(numbs);
 console.log(avg.toFixed(2));