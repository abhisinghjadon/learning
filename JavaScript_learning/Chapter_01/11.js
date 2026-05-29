//Program 11: Reverse a given number (e.g., 1234 -> 4321).
//for browser
//let number = Number(prompt("Enter the Number for find Reverse of It"));
let number = 1234;
let rev = 0;
let temp = number;
let rem;
while (temp > 0) {
  rem = temp % 10;
  rev = rev * 10 + rem;
  /*
    JavaScript mein jab aap kisi integer ko 10 se divide karte hain
     (e.g., 1234 / 10), toh result 123.4 aata hai. Kyunki temp ki value
      0 nahi ho rahi (wo 12.34, 1.234, 0.1234... aise chalti rahegi), 
    isliye while(temp > 0) wali condition hamesha true rehti hai.
    solution :=>>Math.floor()
  */
  temp = Math.floor(temp / 10);
}
console.log(`Your Number is ${number} and its Reverse is ${rev} `);
