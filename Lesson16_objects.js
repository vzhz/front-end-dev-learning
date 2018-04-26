// Lesson16_objects.js

/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() { 
        if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
        } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};


/*
 * Programming Quiz: Menu Items (7-2)
 */

var breakfast = {
    name : "The Lumberjack",
    price : 9.95,
    ingredients : ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};


//wrong
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 * add a printAccountSummary() method that returns the following account message:
* Welcome!
* Your balance is currently $1000 and your interest rate is 1%.
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function() {
        return 
            “Welcome" + "\nYour balance is currently $” +
            savingsAccount.balance + 
            " and your interest rate is " + 
            savingsAccount.interestRatePercent + 
            "%.";
        
    }
};

console.log(savingsAccount.printAccountSummary(1000, 1));

//right
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary() {
   return("Welcome!\nYour balance is currently $"+savingsAccount.balance+" and your interest rate is "+ savingsAccount.interestRatePercent+"%."); 
  },
}; 

savingsAccount.printAccountSummary();


/*
 * Programming Quiz: Facebook Friends (7-5)
 * Create an object called facebookProfile. The object should have 3 properties: 
 * your name, the number of friends you have, and an array of messages you've posted (as strings)
 * The object should also have 4 methods:
* postMessage(message) - adds a new message string to the array
* deleteMessage(index) - removes the message corresponding to the index provided
* addFriend() - increases the friend count by 1
* removeFriend() - decreases the friend count by 1
 * Q for self: when to add (for example) ": function addMessagetoArray (message)"
 */

var facebookProfile = {
    name : "veh",
    friends : 4,
    messages : [
        "Cheeeese!",
        "Yummmm cheese!",
        "Golly I like cheese!"
        ],
    postMessage(messages, message) {
        messages = facebookProfile.messages.push(message);
    },
    deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend() {
        facebookProfile.friends++;
    },
    removeFriend() {
        facebookProfile.friends--;
    }
};



/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(singleDonut) {
    console.log(singleDonut.type + " donuts cost $" + singleDonut.cost + " each");
});