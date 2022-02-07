// const radius = [3, 1, 2, 4];
// const calculate = function (radius , logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//     }
//     return output;
// };
// const area = function (radius){
//     return Math.PI*radius*radius;
// };
// const circumference = function (radius){
//     return 2*Math.PI*radius;
// };
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(radius.map(area));
const arr = [5,1,3,2,6];

function double (x) {
    return x*x;
}
const output = arr.map(double);
console.log(output);
 function binary(x) {
    return x.toString(2);
}
//Another approach to call a function
const output1 = arr.map(function binary(x) {
    return x.toString(2);
});
console.log(output1);
//same with lambda one
const output2 = arr.map((x) => {
    return x.toString(2);
});
console.log(output2);
//same with lambda reduction to smallest
const output3 = arr.map((x) => x.toString(2));
console.log(output3);
