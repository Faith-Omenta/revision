let string="I love rain"
let string2='I love rain'
let string3=`I love rain`
console.log(string);
console.log(string2);
console.log(string3);

console.log(string.length);

let sliced=string.slice(3,7)
console.log(sliced);
console.log(sliced.length);

let text=string.slice(7)
console.log(text);

let fruits="Apple, Kiwi, Banana" //negative slicing
let part=fruits.slice(-6,-2)
console.log(part);

let part1=fruits.substring(2,6)
console.log(part1);

let part3=fruits.substr(7,6)
console.log(part3);

// replacing string method
let visit="Please visit Microsoft and microsoft"
// let newVisit=visit.toLowerCase().replace(/microsoft/g,"google")
let newVisit=visit.replace(/microsoft/gi,"google")
console.log(newVisit);

let x="hopper"
let s=x.toUpperCase()
console.log(s)

let text1="Hello "
let text2="World"
let text3=text1.concat(text2)
console.log(text3);

let text4=text1+ " " +text2
console.log(text4);

//removing white space using trim
let word=" Hello world "
let word4=word.length
console.log(word4);
let word1=word.trim()
console.log(word1);
let word5=word1.length
console.log(word5)

// trimStart
// trimEnd

// padding
// padStart
// padEnd
let num="43"
let z=num.padStart(3,"0")
console.log(z)

// changing num to string
let num1=5
let a=num1.toString()
console.log(a);
// =+
let numbers="12"
let numbers1=+numbers+6
console.log(numbers1);

// extracting string characters
let food="ugali"
let c=food.charAt(2)
console.log(c);
// property access
let d=food[3]
console.log(d);

// converting string to array
let name="Lindsay and Faith"
let name2=name.split("")
console.log(name2);



const reverseSentence = str => { //arrow function loops through the string
   const arr = str.split(" ");
   const reversed = arr.map(el => {
      return el.split('').reverse().join("");
   });
   return reversed.join(" ");
};
const str = "Joan and Faith are AkiraChix students";
console.log(reverseSentence(str));







