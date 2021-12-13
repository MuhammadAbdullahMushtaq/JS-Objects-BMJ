//          -----------Chapter 35 - 38-------------

// function currentTime() {
//     document.write(new Date())
// }
// currentTime()


// function namee() {
//     var firstName = prompt("Enter First Name")
//     var lastName = prompt("Enter Last Name")
//     var fullName = firstName + " " + lastName
//     return ("Welcome" + " " + fullName)
// }
// document.write(namee())


// var num1 = +prompt("Enter first number")
// var num2 = +prompt("Enter second number")
// function sum(a, b) { 
//     var add = a + b
//     return add
// }
// document.write(sum(num1, num2))


// var num1 = +prompt("Enter first number")
// var opt = prompt("Enter Operator")
// var num2 = +prompt("Enter second number")
// function calc(num1, opt, num2) {
//     if (opt.trim() === "+") {
//         return ("Addition of " + num1 + " and " + num2 + " = " + (num1 + num2))
//     }
//     else if (opt.trim() === "-") {
//         return ("Subtraction of " + num1 + " and " + num2 + " = " +(num1 - num2))
//     }
//     else if (opt.trim() === "*") {
//         return ("Multiplication of " + num1 + " and " + num2 + " = " + (num1 * num2))
//     }
//     else if (opt.trim() === "/") {
//         return ("Division of " + num1 + " and " + num2 + " = " + (num1 / num2))
//     }
//     else {
//         return "Enter Valid Input"
//     }
// }
// var calculate = calc(num1, opt, num2)
// document.write(calculate)


// function square(a) {
//     return a**2
// }
// var num = +prompt("Enter a nubmer to find its square")
// var squared = square(num)
// document.write("Your Number: " + " " + num + "<br>")
// document.write("Square of your number: " + squared)


// function factorial(num) {
//     if (num < 0) {
//         return "Factorial of negative number is not possible"
//     }
//     else if (num === 0) {
//         return 1
//     }
//     else {
//         for (var i = num - 1 ; i >= 1 ; i--) {
//             num = num * i
//         }
//         return num
//     }
// }
// var num = +prompt("Enter any positive integer")
// var fact = factorial(num)
// document.write("Factorial of " + num + " is " + fact)


// var num1 = +prompt("Enter Starting Number")
// var num2 = +prompt("Enter Last Number")
// function count() {
//     if (num1 <= num2) {
//         for(var i = num1 ; i <= num2 ; i++) {
//             document.write(i + "<br>")
//         }
//     }
//     else {
//         alert("Please Enter in Ascending Order")
//     }
// }
// count()


// var base = +prompt("Enter Base of a Right Angled Triangle")
// var perp = +prompt("Enter Perpendicular of a Right Angled Triangle")
// function calculateHypotenuse(base, perp) {
//     var hypo = Math.sqrt(base**2 + perp**2)
//     return hypo
// }
// var hypotenuse = calculateHypotenuse(base, perp)
// function calculateSquare() {
//     var squared = hypotenuse**2
//     return squared
// }
// var squaredHyp = calculateSquare()
// document.write("Hypotenuse of your Right Angled Triangle is: " + hypotenuse)
// document.write("<br> Square of the Hypotenuse is: " + squaredHyp)


// var width = +prompt("Enter Width")
// var height = +prompt("Enter Height")
// function calculateArea(width, height) {
//     var area = width * height
//     return area
// }
// var varArea = calculateArea(width, height)
// var valArea = calculateArea(5, 6)
// document.write("Area calculated from user's input i.e. Arguments as Variables : " + varArea + "<br><br>")
// document.write("Area calculated from already given values i.e. Arguments as Values : " + valArea)


// var input = prompt("Enter any word to check if its a Palindrome")
// function checkPalindrome(input) {
//     var string = input.toLowerCase().replace(" ","")
//     var count = 0;
//     if (string === "") {
//         alert("Nothing Found!")
//     }
//     if ((string.length) % 2 === 0){
//         count = (string.length) / 2
//     }
//     else if (string.length === 1) {
//         document.write("Entered String is a Palindrome")
//     }
//     else {
//         count = (string.length - 1) / 2
//     }
//     var flag = true
//     for (var i = 0 ; i < count ; i++) {
//         if (string[i] != string.slice(-1-i)[0]) {
//             flag = false
//         }
//     }
//     if(flag === false) {
//         document.write("Entrered String is not a Palindrome")
//     }
//     else if(flag === true) {
//     document.write("Entered String is a Palindrome")
//     }
// }
// checkPalindrome(input)


// var string = prompt("Enter any string");
// function capitialize(string) {
//     var arr = string.split(" ");
//     for(var i = 0 ; i < arr.length ; i++){
//         var word = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
//         document.write(word + " ");
//     };
// };
// capitialize(string);


// var string = prompt("Enter any string");
// function longestWord(string) {
//     var arr = string.split(" ");
//     var largest = "";
//     for (var i = 0 ; i < arr.length ; i++) {
//         if (arr[i].length > largest.length) {
//             largest = arr[i];
//         };
//         else if (arr[i].length == largest.length) {
//             largest = largest + ", " + arr[i];
//         };
//     };
//     return largest;
// };
// var longLength = longestWord(string);
// document.write("Entered String: " + string + "<br>");
// document.write("Longest Word(s) in this String: " + longLength);

;

// var string = prompt("Enter string");
// var letter = prompt("Enter the letter to be counted");
// function letterCount(string, letter) {
//     var count = 0;
//     for (var i = 0 ; i < string.length ; i++) {
//         if(string[i] == letter) {
//             count += 1;
//         };
//     };
//     return count;
// };
// var noOfAppereance = letterCount(string , letter);
// document.write("Given String is: " + string);
// document.write("<br> No. of " + letter + "(s) appeared in this string: " + noOfAppereance);


// var radius = prompt("Enter Radius");
// function calcCircumference(radius) {
//     var circum = 2 * Math.PI * radius;
//     return circum;
// };
// function calcArea(radius) {
//     var area = Math.PI * radius**2;
//     return area;
// };
// var circumference = calcCircumference(radius);
// var area = calcArea(radius);
// document.write("The circumference is " + circumference);
// document.write("<br> The area is " + area);