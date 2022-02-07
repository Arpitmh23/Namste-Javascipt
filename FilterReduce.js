const arr = [5,1,3,2,6];
// USing lambda
const output = arr.filter((x) => x%2 );
console.log(output);
//Reduce use
const output1 = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output1);
//Finding Max Value
const maximumValue = arr.reduce(function (max ,current) {
    if(current>max) {
        max = current;
    }
    return max;
},0)
console.log(maximumValue);