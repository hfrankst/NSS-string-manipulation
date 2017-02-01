"use strict";

console.log("Here we go...");

var buttonPress = document.getElementsByClassName("activate");


//function to run the string functions upon 'enter' keypress
function enterPress(inputType) {
	// console.log(inputType, typeof inputType)
    if (inputType.keyCode === 13) {
	// console.log(inputType, typeof inputType)
		
		reversal(inputType.target.value);
		alphabits(inputType.target.value);
		palindrome(inputType.target.value);
    } 
	// console.log(inputType);		

};

//function to run the string functions on the button press

function onClick(){
	var inputType = document.getElementById("userString").value;
	reversal(inputType);
	alphabits(inputType);
	palindrome(inputType);

	console.log("The input so far is.. ", inputType);

};

//function to determine if the user's input is a valid character, shows an alert if it's not
	function letterOnly(inputType){
	//watching for the key codes of all number keys
	var x = inputType.keyCode;
	if(x >= 48 && x <= 57){
		inputType.value = "";
		alert("Please enter a string of letters!");
	}
}

//STRING FUNCTIONS


function reversal(inputType) {
	//spliting the str up
	console.log(inputType, typeof inputType)
	var stringSplit = inputType.split('');

	//reversing the split string
	var backwards = stringSplit.reverse();

	//joining the reversed string
	var backTogether = backwards.join('');

	//give me the reversed string
	console.log(backTogether);
	return backTogether;
 }



function alphabits(inputType) {
	//split the string up 
	var stringSplit = inputType.toLowerCase().split('');

	//sorting the split string
	var alphabet = stringSplit.sort();

	//joining the sorted string
	var inOrder = alphabet.join('');

	console.log(inOrder);
	return inOrder;
}



function palindrome(inputType) {
	//split, reverse, then join the string
	// var newWord = ;
	if(inputType === inputType.split('').reverse().join('')){//this isn't working and I am not sure why
		alert("That's a palindrome!");
		console.log("Input WAS a palindrome ", inputType)
	} else {
		alert("I'm not mad...just disappointed you didn't give me a palindrome.");
		console.log("Input wasn't a palindrome ", inputType);
	}
}


