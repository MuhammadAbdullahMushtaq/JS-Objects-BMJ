//                  -----------Chapter 21 - 25------------

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName);


// var favMobile = prompt("Enter your favorite Mobile Model...");
// document.write("Your Favorite Mobile is: " + favMobile);
// document.write("<br> Length of String: " + favMobile.length);


// var string1 = "Pakistani";
// document.write("String: " + string1);
// document.write("<br> Index of 'n': " + string1.indexOf("n"));


// var string2 = "Hello World";
// document.write("String: " + string2);
// document.write("<br> Last Index of 'l': " + string2.lastIndexOf("l"));


// var string3 = "Pakistani";
// document.write("String: " + string3);
// document.write("<br> Character at Index 3: " + string3.charAt(3));


// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" ",lastName);
// alert("Welcome " + fullName);


// var city = "Hyderabad";
// document.write("City: " + city);
// city = city.replace("Hyder", "Islam");
// document.write("<br> After Replacement: " + city);
//


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + message);
// message = message.replace(/and/g, "&");
// document.write("<br> After replacing 'and' with '&': " + message);


// var numString = "472";
// document.write("Value: " + numString);
// document.write("<br> Type: " + typeof(numString));
// numString = parseInt(numString);
// document.write("<br> Value: " + numString);
// document.write("<br> Type: " + typeof(numString));


// var userInput = prompt("Enter Input");
// document.write("User input: " + userInput);
// document.write("<br> Upper case: " + userInput.toUpperCase());


// var userInput = prompt("Enter Input");
// document.write("User input: " + userInput);
// var str1 = userInput[0].toUpperCase();;
// var str2 = userInput.slice(1).toLowerCase();
// var titleCase = str1 + str2;
// document.write("<br> Title case: " + titleCase);


// var num = 35.36;
// document.write("Number: " + num);
// num = num.toString();
// num = num.replace(".", "");
// document.write("<br> String: " + num);


// // 1st Method
// var userInput = prompt("Enter your Name");
// var a = userInput.charCodeAt(userInput.indexOf("!"));
// var b = userInput.charCodeAt(userInput.indexOf(","));
// var c = userInput.charCodeAt(userInput.indexOf("."));
// var d = userInput.charCodeAt(userInput.indexOf("@"));
// if(a == 33 || b == 44 || c == 46 || d == 64){
//     alert("Please enter a valid username");
// }
// // 2nd Method
// var userInput = prompt("Enter your Name");
// for (var i = 0 ; i < userInput.length ; i++) {
//     if(userInput[i] === "!" || userInput[i] === "," || userInput[i] === "." || userInput[i] === "@") {
//         alert("Please enter a valid username");
//     };
// };


// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// search = search.toLowerCase();
// var flag = false;
// for(var i = 0 ; i < arr.length ; i ++ ){
//     if(search == arr[i]){
//         flag = true;
//         document.write(search + " is available at index " + i + " in our bakery");
//     };
// };
// if(flag == false){
//     document.write("We are sorry. " + search + " is not available in our bakery");
// };


// var pass = prompt("Enter Password");
// document.write("Entered Password: " + pass);
// var z = pass.charCodeAt(pass.indexOf(pass[0]));
// if (z >= 48 && z <= 57) {
//     document.write("<br> Password can not begin with a number");
//     document.write("<br> Please enter a valid password");
// }
// else if (pass.length < 6){
//     document.write("<br> Password can not be less than 6 characters");
//     document.write("<br> Please enter a valid password");
// };
// else{
//     document.write("<br> Password Stored");
// };


// var university = "University of Karachi";
// for (var i = 0 ; i < university.length ; i++ ) {
//     document.write(university[i] + "<br>");
// };


// var userInput = prompt("Enter Input to also display the last character");
// document.write("User input: " + userInput);
// document.write("<br> Last character of input: " + userInput.slice(-1));


// var str = "the quick brown fox jumps over the lazy dog";
// document.write("Text: " + str);
// document.write("<br> There are " + 2 + " occurence(s) of word 'the'");



//              --------------Chapter 26 - 30--------------

// var num = +prompt("Enter Any Positive Integer")
// if (num >= 0) {
//     document.write("number: " + num)
//     var roundOff = Math.round(num)
//     document.write("<br> round off value: " + roundOff)
//     var floor = Math.floor(num)
//     document.write("<br> floor value value: " + floor)
//     var ceil = Math.ceil(num)
//     document.write("<br> ceil value: " + ceil)
// }
// else {
//     document.write("Please enter valid input")
// }


// var num = +prompt("Enter Any Negative Integer")
// if (num <= 0) {
//     document.write("number: " + num)
//     var roundOff = Math.round(num)
//     document.write("<br> round off value: " + roundOff)
//     var floor = Math.floor(num)
//     document.write("<br> floor value value: " + floor)
//     var ceil = Math.ceil(num)
//     document.write("<br> ceil value: " + ceil)
// }
// else {
//     document.write("Please enter valid input")
// }


// var num = +prompt("Enter Any Number")
// var absNum = Math.abs(num)
// document.write("The absolute value of " + num + " is " + absNum)


// var ranNum = parseInt(Math.random() * 6 + 1)
// document.write("random dice value: " + ranNum)


// var ranNum = parseInt(Math.random() * 2 + 1)
// if(ranNum == 2) {
//     document.write(ranNum + "<br>")
//     document.write("random coin value: Heads")
// }
// else if (ranNum == 1) {
//     document.write(ranNum + "<br>")
//     document.write("random coin value: Tails")
// }


// var ranNum = parseInt(Math.random() * 100 + 1)
// document.write("random number between 1 and 100: " + ranNum)


// var weight = prompt("Enter your weight in kilograms")
// var value = parseFloat(weight)
// document.write("The weight of user is " + value + " kilograms")


// var ranSecNum = parseInt(Math.random() * 10 + 1)
// var userNum = +prompt("Enter a number between 1 and 10")
// if(userNum == ranSecNum) {
//     alert("Congratulations! Your guess is correct")
// }
// else{
//     alert("Try Again")
// }