"use strict";

console.log("Here we go...");
var inputType = document.getElementsByClassName("userString").value;

var buttonPress = document.getElementsByClassName("activate");


//function to run the string functions upon 'enter' keypress
function enterPress(event) {
    if (event.keyCode === 13) {
    	var testString = inputType;
		// reversal(testString);
		// alphabits(testString);
		// palindrome(testString);
    } 
	// console.log(testString);
};

//function to run the string functions on the button press

function onClick(){
	var testString = inputType;
	// reversal(inputType);
	// alphabits(testString);
	// palindrome(testString);
	console.log("The input so far is.. ", testString);

};

//function to determine if the user's input is a valid character, shows an alert if it's not
	function letterOnly(event){
	//watching for the key codes of all number keys
	var x = event.keyCode;
	if(x >= 48 && x <= 57){
		inputType.value = "";
		alert("Please enter a string of letters!");
	}
}

//STRING FUNCTIONS


// function reversal(inputType) {
// 	//spliting the str up
// 	var stringSplit = inputType.split("");

// 	//reversing the split string
// 	var backwards = stringSplit.reverse();

// 	//joining the reversed string
// 	var backTogether = backwards.join(" ");

// 	//give me the reversed string
// 	console.log(backTogether);
// 	return backTogether;
//  }



// // function alphabits(str) {
// 	//split the string up 
// 	var stringSplit = str.split('');

// 	//sorting the split string
// 	var alphabet = stringSplit.sort();

// 	//joining the sorted string
// 	var inOrder = alphabet.join('');

// 	console.log(inOrder);
// 	return inOrder;
// }



// // function palindrome(str) {
// 	//split, reverse, then join the string
// 	// var newWord = ;
// 	if(str === str.split('').reverse().join('')){//this isn't working and I am not sure why
// 		alert("That's a palindrome!")
// 	} else {
// 		alert("I'm not mad...just disappointed you didn't give me a palindrome.");
// 	}
// }


