function sum (a,b) {
    return(a+b);
}
console.log("addition:",sum(10,2));
//Timeout
setTimeout(()=>{
    console.log("print after sec");
},2000);

function abc (a,b,callback) {
    let c = a+b;
    console.log("c:" +c);
}
abc(2,6,sum);