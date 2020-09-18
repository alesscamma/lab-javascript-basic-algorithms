// Iteration 1: Names and Input

//1.1 & 1.2
let hacker1 = 'Alessandro';
  console.log(`The driver's name is ${hacker1}`);

//1.3 & 1.4
let hacker2 = 'Cammarata';
  console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  };

// Iteration 3: Loops

//3.1
let driverSpell = "";
let hacker1Caps = hacker1.toUpperCase();
for (let i = 0; i<hacker1Caps.length; i++) {
  driverSpell += hacker1Caps[i] + ' ';
}
console.log(driverSpell);

//3.2
let reverseNavigator = '';
for(let i=hacker2.length -1; i>=0; i--){
  reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);

//3.3
if (hacker1 < hacker2){
    console.log(`The driver's name goes first.`);
  } else if ( hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
  