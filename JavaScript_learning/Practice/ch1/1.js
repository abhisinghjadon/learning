// Program 36: Find the largest and smallest element in an array (bina Math.min/Math.max ke, single loop se).

const data = [1, 8, 56, -7, 10, 789, 41, 12, 42];
let val,
  min,
  max = data[0];
min = max;

for (let i = 0; i < data.length; i++) {
  val = data[i];
  if (val > max) max = val;
  if (val < min) min = val;
}

console.log(`Minimun value ${min}`);
console.log(`Maximun value ${max}`);
