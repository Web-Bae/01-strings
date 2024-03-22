/**
 * Task 6: Control Structures - Conditional Statements
 */

// Define a variable named studentGrade that is of type number.
let studentGrade = 95;

function gradeCommentary() {
  // 1. If studentGrade is above or equal to 90, log "Excellent work!".
  // 2. If studentGrade is between 80 and 89 (inclusive), log "Good job!".
  // 3. If studentGrade is between 70 and 79 (inclusive), log "You passed.".
  // 4. If studentGrade is below 70, log "Needs improvement.".
  let comment = "";
  if (studentGrade >= 90) {
    comment = "Excellent work!";
  } else if (studentGrade <= 89 && studentGrade >= 80) {
    comment = "Good job!";
  } else if (studentGrade <= 79 && studentGrade >= 70) {
    comment = "You passed.";
  } else {
    comment = "Needs improvement."
  }
  console.log(comment);
}

/**
 * Task 7: Control Structures - Loops
 */

function logNumbers() {
  // 1. Log numbers from 1 to 10 using a for loop.
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function countByTwos() {
  // 2. Using a while loop, log even numbers from 2 to 20.
  let i = 2;
  while (i <= 20) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i += 2;
  }
}

function triangle() {
  // 3. Using loops, output a traingle of '#' characters
  /*
    #
    ##
    ###
    ####
    #####
    ######
    #######
  */
  const char = "#";
  for (let i = 1; i <= 7; i++) {
    console.log(char.repeat(i));
  }
}

/**
 * Task 8: More on Functions
 */

// 1. Declare a function named calculateArea that takes two arguments: length and width. It should return the area of a rectangle.
function calculateArea(length, width) {
  // Your code here
  const area = length * width;
  if (area < 0) {
    return NaN;
  } else {
    return area;
  }
}

// 2. Declare a function expression named greetPerson that takes a name as an argument and logs a greeting.
var greetPerson = function (name) {
  // Your code here
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
};

/**
 * Task 9: Objects and Properties
 */

// 1. Declare an object named book with properties: title, author, and year.
var book = {
  // Your properties here
  title: "Lord of the Rings",
  author: 'J.R.R. Tolkin',
  year: 1932
};

// 2. Log the book's title.
function logBookTitle() {
  // Your code here
  console.log(book.title)
}

// 3. Update the book's year to the current year.
function updateYear() {
  // Your code here
  const today = new Date();
  const currYear = today.getFullYear()
  book.year = currYear;
}

// 4. Add a new property to the book: genre, and assign it a value.
function addGenre() {
  // Your code here
  book.genre = 'Fiction'
}
