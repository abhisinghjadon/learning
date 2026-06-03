// Program 66: Clone an object deeply so changes to the copy don't affect the original.
const original = {
  name: "Abhishek",
  skills: ["JavaScript", "Python"],
  address: { city: "Aligarh" },
};
//modern way
// const copy = structuredClone(original);
// console.log(copy);

/*
    Notes By Ai=>
        Yeh background me kya karta hai?
                Yeh automatic original object ke andar jata hai.

                Dekhta hai ki isme kitne nested objects ya arrays hain.

                Memory me un sabka ek ekdum naya, independent copy (kho-ba-kho naya dibba) taiyar kar deta hai.

                Aapko koi loop chalane ki, koi typeof check karne ki, ya koi khud ka function likhne ki zaroorat nahi hai.

                Summary: Jo kaam tumhara 20-25 line ka deepClone function kar raha tha, structuredClone() wahi kaam parde ke peeche automatic aur bohot fast tarike se kar deta hai. Aaj kal real projects me log isi ka use karte hain!
*/

//old  way

// copy naam ka khali object
const copy = {};

// copy.name ab "Abhishek" ho gaya
copy.name = original.name;

//agar ham copy.skill=original.skill karte hai to computer rukh jayega or ek shallow copy create hogi
// Yeh bilkul naya array hai!
copy.skills = ["JavaScript", "Python"];

//Yeh bhi ek object hai. Phir se wahi darr ki direct copy kiya toh dono ka address same ho jayega.

// Yeh bhi ek naya object hai!
copy.address = { city: "Aligarh" };

//modify add new skill
copy.skills.push("PHP");
//modify city
copy.address.city = "Agra";

console.log(copy);
