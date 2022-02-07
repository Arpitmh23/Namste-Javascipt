const studentData = [
    {id: 1, name:'Anna', degree: 'be' , age:25},
    {id: 2, name:'Tanna', degree: 'btech', age:26},
    {id: 3, name:'Panaa', degree: 'bsc', age:27},
    {id: 4, name:'Canaa', degree: 'bsc', age:25},
    {id: 5, name:'Kanaa', degree: 'btech', age:27},
    ];

//Printing name and degree shortest way
    const out = studentData.map((x) => x.name +" " + x.degree);
    console.log(out);
// Sorting degree    
    const outputDegree = studentData.reduce(function (acc , curr){
        if(acc[curr.degree]) {
            acc[curr.degree] = ++acc[curr.degree];
        }
        else {
            acc[curr.degree] = 1;
        }
        return acc;
    }, {} );
    console.log(outputDegree);
//Filtering out age wise

const outputFilter = studentData.filter((x) => x.age>25);
//Using same we can modify yhis using .map
//const outputFilter = studentData.filter((x) => x.age>25).map((x) => x.name);
console.log(outputFilter);

//Filtering out same using reduce
const outputFilter1 = studentData.reduce((acc,curr) => {
    if (curr.age > 25) {
        acc.push(curr.name)
    }
    return acc;
}, []);
console.log(outputFilter1);