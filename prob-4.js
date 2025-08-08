// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(bString) {
     let count  = 0;
    for(const ch of bString){
        if(ch =="0"){
            count++;
        }
    }
    return count;
    
}


const str = "1000101101110011000001110";

const count = count_zero(str);

console.log(count);

