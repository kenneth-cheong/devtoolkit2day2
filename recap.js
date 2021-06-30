// x = "Dixant";

// console.log("My message");

// console.log(x);

// let x = 12;
// let y = 3;

// console.log(
//   "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ",
//   +(x / y)
// );

// console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`);

// console.log(`Value of x : ${x}`);
// console.log("Value of x : " + x);

// // Conditional Statements
// let age = 10;
// if (age > 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You cannot vote right now.");
// }

// Functions
// function print_sum(a, b) {
//   console.log(`a: ${a}`);
//   console.log(`b: ${b}`);

//   console.log(`a + b = ${a + b}`);
// }

// print_sum(2, 3);

// function add(a, b) {
//   return a + b;
// }

// var sum = add(2, 3);

// console.log(`Sum: ${sum}`);

// // anonymous functions
// var function_to_print_sum = function (a, b) {
//   console.log("a + b = " + (a + b));
// };

// Arrow functions
// var function_to_print_sum = (a, b) => {
//   console.log("a + b = " + (a + b));
// };

// function_to_print_sum(4, 4);

function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }
  
  print_after_operation(3, 4, add);
  print_after_operation(3, 4, product);

  
  // Practical Exercise Slide 34
  //Task 1 
  function add (a,b){
      return a + b;
  }

  function subtract (a,b){
    return a - b;   
}

function multiply (a,b){
    return a * b;
}

function printer (a,b,operation){
    var result = operation(a,b);
    console.log("Result: "+result);
}

//Task 2
function check_leap (year){
    var year = year;
    if (year%400 === 0){
        console.log(`Year ${year} is a leap year!`);
    }
    else if (year%4 === 0){
        console.log(`Year ${year} is a leap year!`);
    }
    else if (year%100 === 0){
        console.log(`Year ${year} is not a leap year!`);
    }
    else {
        console.log(`Year ${year} is not a leap year!`);
    }
}
check_leap(2021);

//Task 3
function inch_cm(x){
    var cm = x;
    console.log(`${cm} cm is ${x/2.5} inches.`);
}

inch_cm(30);
