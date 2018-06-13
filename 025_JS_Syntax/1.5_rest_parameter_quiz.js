/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

function average(...nums) {
    let a=0;
    for (const num of nums) {
        a+=num;
        b=nums.length;
    }
    return a/b;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
