// Program 68: Count the number of properties present in an object.
const project = {
  id: "P01",
  title: "E-Commerce Website",
  techStack: ["JS", "PHP", "MYSQL"],
  durationMonths: 3,
  isCompleted: false,
};

// Count the properties
const propertyCount = Object.keys(project).length;

console.log("Total properties:", propertyCount);

//IF NAESTED PROPERTY OBJECT INSIDE OBJECT
// -> YE KAAM NHI KAREGA
//Object.keys().length

//USE TRADITIONAL WAY
/*
for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++; // Top-level property ko gina

            // Agar value ek object hai aur null nahi hai, toh andar jao (Recursion)
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                count += countAllProperties(obj[key]); // Andar wali properties ko jod diya
            }
        }
    }
    return count;
}
*/
