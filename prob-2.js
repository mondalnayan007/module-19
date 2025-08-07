// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function checker(number){
    if(number % 2 == 0){
        number = number / 2;
        return number;
    }
    else{
        number = number * 2;
        return number;
    }
}

const result = checker(5);
console.log(result);
