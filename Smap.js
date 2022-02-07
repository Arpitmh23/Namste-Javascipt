let map = new Map();
map.set(1, 'a');
map.set(2, 'b');
console.log(map.get(2));
console.log("Displaying Keys");
for(let value of map.values()) {
    console.log(value);
}
// map.delete(1);
for(let k of map.values()) {
    console.log();
}
//1way
map.forEach((v,k)=>{
console.log("key :" , k);
console.log("value :" ,v);
} );
//2nd way
map.forEach(handle);
function handle (value , key) {
    console.log("key", key);
    console.log("value", value);
}
console.log(map.size);
console.log(map.has(1));

let name = "Dhiraj Suresh Ramesh"
let parts = name.split(' ')
let firstName = parts.shift(); 
let lastName = parts.join(' ');
console.log({firstName,lastName})