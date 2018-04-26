/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x < 21) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    if ((x % 3) === 0 && (x % 5) === 0){
        console.log("JuliaJames");
    } else if (x % 5 === 0){
        console.log("James");
    } else if (x % 3 === 0){
        console.log("Julia");
    } else {
        console.log(x);
    } x = x + 1;
}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
    // check value of num
while (num >= 1) {
    // print lyrics using num
    if (num > 1) {
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around...")
    } else {
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around...")
    }
    
    // don't forget to check pluralization on the last line!
    // decrement num
    num = num - 1;
        if (num > 1) {
        console.log(num + " bottles of juice on the wall!")
    } else if (num === 0) {
        console.log(num + " bottle of juice on the wall!")
    }
}


// Using Tenary 
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
    // check value of num
while (num > 0) {
    // print lyrics using num
    plural = num > 1 ? "s" : "";
    end = (num - 1) === 1 ? "" : "s";
    console.log(num + " bottle"+plural+" of juice on the wall! " + num +
    " bottle"+plural+" of juice! Take one down, pass it around... " + (num-1) + 
    " bottle"+end+" of juice on the wall!");
    num--;
}



/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

var sec = 60;

while (sec >= 0) {
   /* Orbiter transfers from ground to internal power (T-50 seconds)
    * Ground launch sequencer is go for auto sequence start (T-31 seconds)
    * Activate launch pad sound suppression system (T-16 seconds)
    * Activate main engine hydrogen burnoff system (T-10 seconds)
    * Main engine start (T-6 seconds)
    * Solid rocket booster ignition and liftoff! (T-0 seconds)
    */
    printout = (sec === 50) ? "Orbiter transfers from ground to internal power" : (sec === 31) ? "Ground launch sequencer is go for auto sequence start" : (sec === 16) ? "Activate launch pad sound suppression system" : (sec === 10) ? "Activate main engine hydrogen burnoff system" : (sec === 6) ? "Main engine start" : (sec === 0) ? "Solid rocket booster ignition and liftoff!" : ("T-" + sec + " seconds");
    console.log(printout);
    sec--;
}



/*
 * Programming Quiz: Changing the Loop (4-4)
 */

/*
*var x = 9;
*while (x >= 1) {
*  console.log("hello " + x);
*  x = x - 1;
*}
*/

// rewrite the while loop as a for loop
for (var x = 9; x >= 1; x--) {
    console.log("hello " + x);
}



/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

for (x < 10; x++) {
  console.log(x);
}

// fix the for loop
for (var x = 5; x < 10; x++) {
    console.log(x);
}


/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

for (var k = 0 k < 200 k++) {
  console.log(k);
}

// fix the for loop
for (var k = 0; k < 200; k++) {
    console.log(k);
}



/*
 * Programming Quiz: Factorials (4-7)
 */

/*
    12! = 4.790016 E+8
*/

// your code goes here

var solution = 12;


// 12 * 11!
for(var n = 11; n > 1; n--) {
    
    // 12*11*10*...n-1*1
    solution *= n;
}
console.log(solution);



/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here

// for each row
for(var row=0; row<26; row++){
    
    // and for each seat
    for(var seat=0; seat<100; seat++){
        
        // print the seat as "row number - seat number "
        // example: 0-0, 0-1 and so on
        console.log(row+"-"+seat);
    }
}



