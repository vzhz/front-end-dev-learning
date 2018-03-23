/* Lesson14_functions.js */

/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here
function laugh(){
    return("hahahahahahahahahaha!")
}

console.log(laugh())


/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */


var num;
function laugh(num){
    var message = "";
    message += 'ha'.repeat(num);
    message = message + "!";
    console.log(message);
    return message;
}
laugh(10);



/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length){
    var triangle = "";
    for (var j = 1; j <= length; j++){
        triangle = triangle + makeLine(j);
    }
    return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));


/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var message = "";
    message += 'ha'.repeat(num);
    message = message + "!";
    return message
}

console.log(laugh(10));


/*
 * Programming Quiz: Cry (5-5)
 * Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:
 * cry();
 * Returns: boohoo!
 */

var cry = function sob(y){
    return("boohoo!");
};

console.log(cry());



/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function(num){
    var message = "";
    message += 'ha'.repeat(num);
    message = message + "!";
    return message
});


