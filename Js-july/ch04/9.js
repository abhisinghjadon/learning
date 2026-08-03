// Program 69: Create a constructor function for a Student object.
class Student {
  constructor(name, age, rollno) {
    this.name = name;
    this.age = age;
    this.rollno = rollno;
  }

  display() {
    console.log(`Name = ${this.name}`);
    console.log(`Age = ${this.age}`);
    console.log(`Roll No = ${this.rollno}`);
  }
}

let std1 = new Student("Abhishek", "17", "02");
std1.display();
