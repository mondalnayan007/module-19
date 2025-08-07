

function evenNumbers(numbers){
    console.log(numbers);
    const even = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            even.push(number);
        }
        
    }
   return even;
    
}



const numbs = [20, 45 , 34, 75, 98, 55];
const even = evenNumbers(numbs);

console.log(even);
