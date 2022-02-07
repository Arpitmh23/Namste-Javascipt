let prompt = require("prompt-sync");
class StudentManagementSystem {
  rollNo;
  firstName;
  lastName
  address;
  physicsMarks;
  chemistryMarks;
  mathMarks;


constructor(rollNo,firstName,lastName,address,physicsMarks,chemistryMarks,mathMarks) {
    this.rollNo=rollNo;
    this.firstName=firstName;
    this.lastName=lastName;
    this.address=address;
    this.physicsMarks=physicsMarks;
    this.chemistryMarks=chemistryMarks;
    this.mathMarks=mathMarks;
}
}

modules.exports = new StudentManagementSystem ()
