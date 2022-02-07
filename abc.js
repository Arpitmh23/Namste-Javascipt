const studentData = [
    {rollNo: 1, firstName:'Anna', lastName: 'Naman', address:'KacchiKholi', physicsMarks: 60, chemistryMarks:70,mathMarks:90},
    {rollNo: 2, firstName:'Tanna',lastName: 'Aman', address:'Sindhi Camp', physicsMarks:50, chemistryMarks:60,mathMarks:80},
    {rollNo: 3, firstName:'Panaa',lastName: 'Raman',address:'Narayan Baug', physicsMarks:40, chemistryMarks:30,mathMarks:49},
    ];


    const newData = studentData.map ((cvalue) => {
        return `My rollNo is ${cvalue.rollNo}. My last name is ${cvalue.lastName}, My Physic marks is ${cvalue.physicsMarks}`;
    } );
    console.log(newData);

    