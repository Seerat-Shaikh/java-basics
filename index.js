//Shortcutkey to open direct console: Ctrl+Shift+J
//It will just print text "Hello World" on console
console.log('Hello World');

//Assigning Variables
let name = 'Mosh';
console.log(name);

//Cannot be reservered keyword
//Should be meaningful & descriptive not the a1 etc
//cannot start with a no (1name)
//cannot contain a space or hyphen (-)
//Case-sensitive

//If u assigning more than one variables first should be lowercase 
//Second should be uppercase. This is called "Channel notation" convention used in Java
let firstName= 'Mosh';
let lastName= 'ALi';

//Assigning Constants
//For reassigning values
let interestRate = 0.3; //First u let value
interestRate = 1; //Then u change it so console will update it with latest value asisgned
console.log(interestRate);

//But if u want to treat it as a constant so use this
const intRate= 0.5;
//intRate= 2; Here it is giving error on console on this line as constant values can't be changed
console.log(intRate);

//Primitives/Values Types [String, Number, Boolean, Undefined, Null]
let nameA = 'Mosh'; //String Literal
let age= '20'; //Number Literal
let isApproved = false; //BooleanLiteral [True]
let firstNames = undefined;
let selectedColor = null;
//Checking on console ur types
  //typeof nameA
  //"string" it will show this
  //name=1; if u changed it
  //"number" it will show this
  //typeof selectedColor is "object"

//Reference Types [Object, Array, Function]
 //Objects
 let person = {
    name: 'Mosh',
    age: 20
 };
 console.log(person); //{name: 'Mosh', age: 20} reuslts will this

 //Dot Notation
 person.name = 'John';
 console.log(person.name);

 //Bracket Notation
 let selection = 'name';
 person[selection] = 'Sara';
 console.log(person.name);

 //--------ARRAY----------
 //Its an "Object" in Java
 let selectedColors = ['red', 'blue'];
 selectedColors[2] = '1'; // ['red', 'blue', '1'] Since length is dynmaic so it can be changed anytime & types too
 console.log(selectedColors);
 // Results on Console: (2) ['red', 'blue']0: "red" 1: "blue"length: 2[[Prototype]]: Array(0)
 console.log(selectedColors[0]);  //red
 console.log(selectedColors.length); //3 items


 //--------FUNCTIONS---------

 //Performing a task
 function greet() {
    console.log('Hello World');
 }

 greet(); //Hello World "Console Results"

 function gree(name) { //name is parameter here
    console.log('Hello ' + name);
 }

 gree('John'); //John is argument here //Hello John
 gree('Mary'); //Hello Mary

 function sem(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
 }

 sem('John', 'Smith') //Hello John Smith

 //Calculating a value
 function square(number) {
    return number*number;
 }

 console.log(square(2)); //results in "4". //This will first call the function then will return its value
 







