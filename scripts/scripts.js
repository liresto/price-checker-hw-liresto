let item = prompt("Enter the name of the item");

let basePrice = Number(prompt("What is the base price of the item?"));
 
let blackFriday = prompt("Is it Black Friday?");

let message = "";

let finalPrice = basePrice;


if (blackFriday === "yes"){
    finalPrice *= .75;
    message += "Since it's Black Friday, we will reduce the price by 25%.";
}

else{
    console.log("It's not Black Friday, so the price didn't change for that");
}

let searchEngine = prompt("Did the purchaser find the product through a search engine?")

if (searchEngine === "yes"){
    
    finalPrice *= 1.01;
    message += "We will increase the price by 1% to pay the search engine."
}

let comparison = prompt("Did the purchaser visit a comparison shopping site?")

if (comparison === "yes"){
    finalPrice *= .9;
    message += "Since the customer visited a comparison-shopping site, we will reduce the price by 10%.";
}

else{
    message += "The customer didn't visit a comparison-shopping site, so the price didn't change for that";
}

finalPrice = Math.floor(finalPrice);

console.log(finalPrice);

console.log(`The base price for the ${item} is $${basePrice}. ${message} The final price is $${(finalPrice)}`);