// Program 69: Create a constructor function for a Student object.
class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
  getData() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}
const student1 = new Student("Abhishek", 18, "BCA");
student1.getData();

//tradition way
//akhir kese hota hai kaam  old and real way first read notes.txt
//then you will understand this code

/*

// Constructor Function ka naam humesha Capital letter se shuru karte hain (Student)
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    // Method iske andar aise joda jata hai
    this.getData = function() {
        console.log(`Student Name is: ${this.name}`);
    };
}

// Object Kaise Banayein
const student2 = new Student("Rahul", 22, "MCA");

// Method Kaise Call Karein
student2.getData(); // Output: Student Name is: Rahul
*/

//notes
/*
Capital Letter Rakhna Koi Rule Nahi, "Rivaaj" Hai (Convention)
JavaScript me isko hum Naming Convention kehte hain. Yeh ek aisa riwaaj hai jo poori duniya ke programmers ne milkar banaya hai taaki code padhne me aasan ho.

Small Letter (student): Iska matlab hota hai ek normal function (jaise calculateTotal(), fetchData()). Isko hum seedhe call karte hain.

Capital Letter (Student): Iska matlab hota hai ek Constructor Function (ya Class). Isko dekhkar hi samne wale programmer ko samajh aa jata hai ki: "Bhai! Iske aage new keyword lagana zaroorat hai."*/
