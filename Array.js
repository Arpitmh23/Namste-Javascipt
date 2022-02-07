const oldArr = ['kaka', 'messi', 'ronaldo'];
console.log(oldArr[0]);
console.log(oldArr[1]);
console.log(oldArr[2]);
 
const newArr = oldArr.map(function(cvalue , i, arr) {
    return i + " : " + cvalue ;
} );
console.log(newArr);