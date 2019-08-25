//1. Create a function that displays prototypal inheritance
function Phone() {
    this.brand = "Samsung"
}

Phone.prototype.model = function() {
    console.log("I have a " + this.brand + " phone")
};
    
var galaxy = new Phone();
galaxy.model();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log (numbers);
var number5 = numbers.slice(4,5);
console.log (number5);

//3. Delete the last number in the array that you created above.
numbers.pop()
console.log(numbers)

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

/*
    <p id="text1">Strawberries are a popular part of spring and summer diets throughout America. 
    Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. 
    They announce the impending arrival of the ruby red berries that so many people crave. 
    Ripe strawberries taste sweet and have only a slight hint of tartness. 
    They are also one of the healthiest fruits around. 
    There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.</p>
*/
function replaceStraberry() {
    var str = document.getElementById("text1").innerHTML; 
    var edit = str.replace (/strawberry/gi, "banana");
    var edit = str.replace (/strawberries/gi, "bananas");
    document.getElementById("text1").innerHTML = edit;
    console.log (edit);
}


/*5. Create an array and a button. The array should contain 4 football clubs names.
 When the button is clicked, remove all elements out of the array that we just created. 
There after add in 4 names of cars inside that array. Log it to the console. 
*/

var namesOfStuff = ["Real Madrid", "Barcelona", "Manchester united", "Liverpool"];

function changeFotballArray() {
    
    console.log(namesOfStuff);
    namesOfStuff = ["Mercedize", "BMW", "Volvo", "Jaguar"];
    console.log(namesOfStuff);
}




//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.


var person = [
    {
        Name:"Barney Stinson", 
        age:31, 
        Hobby:"suit up, and be legendary"
    },
    {
        Name:"Saint Nicholas", 
        age:130, 
        Hobby:"Stealing your cookies!",
    },
    {
        Name:"Taylor Swift", 
        age:29, 
        Hobby:"likes to shake it off"
    }
    ];

    function filterName(checkName){
        return checkName.Name == "Barney Stinson";
    }

    console.log(person.filter(filterName))

//7. Create a simple function that logs the date.

var date = new Date();

console.log(date)