//              -------------Chapters 38-42-----------------


// var a = +prompt("Enter the Base Value")
// var b = +prompt("Enter the Exponent Value")
// function power(a, b) {
//     var result = Math.pow(a, b)
//     return result
// }
// var result = power(a, b)
// document.write("The value of " + a + " raised to " + b + " is " + result)


// var year = +prompt("Enter Year to check it's a leap year or not")
// function checkLeapYear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//         alert(year + " is a leap year!")    
//     }
//     else {
//         alert(year + " is not a leap year!")
//     }
// }
// checkLeapYear(year)


// var a = +prompt("Length of side 1 of a triangle")
// var b = +prompt("Length of side 2 of a triangle")
// var c = +prompt("Length of side 3 of a triangle")
// function calcSemiPerimeter(a, b, c) {
//     var semiPerimeter = (a + b + c) / 2
//     return semiPerimeter
// }
// var semiPerimeter = calcSemiPerimeter(a, b, c)
// function calcArea(semiPerimeter, a, b, c,) {
//     var area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
//     return area
// }
// var area = calcArea(semiPerimeter, a, b, c)
// document.write("The Semi Perimeter is : " + semiPerimeter)
// document.write("<br> The Area is : " + area)



// function mainFunction(sub1, sub2, sub3) {
//     var sub1 = +prompt("Enter Subject 1 marks")
//     var sub2 = +prompt("Enter Subject 2 marks")
//     var sub3 = +prompt("Enter Subject 3 marks")
//     function average(sub1, sub2, sub3) {
//         var average = (sub1 + sub2 + sub3) / 3
//         return average
//     }
//     var average = average(sub1, sub2, sub3)
//     document.write("The Average is : " + average + "<br>")
//     function percentage(sub1, sub2, sub3) {
//         var obtMarks = sub1 + sub2 + sub3
//         var totalMarks = 300
//         var percentage = (obtMarks / totalMarks) * 100
//         return percentage 
//     }
//     var percentage = percentage(sub1, sub2, sub3)
//     document.write("The Percentage is : " + percentage)
// }
// mainFunction()


// var string = prompt("Enter any string")
// var char = prompt("Enter the character that you want to get index of")
// function indexof(string, char) {
//     for (var i = 0 ; i < string.length ; i++) {
//         if (string[i] == char) {
//             return i
//         }
//     }
// }
// var indexNum = indexof(string, char)
// document.write("First appearence of '" + char + "' in the string '" + string + "' : " + indexNum) 


// var string = prompt("Enter String : (length should not be more than 25)")
// var vowels = ["a", "e", "i", "o", "u"]
// function vowelDeleter(string) {
//     for (var i = 0; i < vowels.length; i++) {
//         var arr = string.split(vowels[i])
//         string = arr.join("")
//     }
//     return string
// }
// var unVoweled = vowelDeleter(string)
// document.write("Your Entered String without any Vowels : " + unVoweled)


// function findOccurances(str){
//     var words = str.split(" ");
//     var count=0;
//     for(var i=0;i<words.length;i++){
//         for(var j=0; j<words[i].length; j++){
//             var char = words[i].slice(j,j+1).toLowerCase();
//             var nextChar = words[i].slice(j+1,j+2).toLowerCase();
//             switch(char){
//                 case "a":
//                 case "e":
//                 case "i":
//                 case "o":
//                 case "u":
//                     switch(nextChar){
//                         case "a":
//                         case "e":
//                         case "i":
//                         case "o":
//                         case "u":
//                             count++;
//                     }
//             }
//         }

//     }
//     return count;
// }
// var str = prompt("Enter any string");
// var count = findOccurances(str);
// document.write("The Entered String : '" + str + "'<br>")
// document.write("The no. of occurences of any two vowels in succession : " + count);


// var dist = +prompt("Enter distance b/w two cities in km.")
// function calcMeter() {
//     var meter = dist * 1000
//     document.write("KM to Meters : " + meter)
// }
// function calcFeet() {
//     var feet = dist * 3280.84
//     document.write("<br> KM to Feets : " + feet)
// }
// function calcInch() {
//     var inch = dist * 39370.1
//     document.write("<br> KM to Inch : " + inch)
// }
// function calcCenti() {
//     var centimeter = dist * 100000
//     document.write("<br> KM to Centimeters" + centimeter)
// }
// calcMeter()
// calcFeet()
// calcInch()
// calcCenti()


// var hours = +prompt("Hours worked by an employee: ")
// var payPerHour = 12
// function overtimePay() {
//     if(hours > 40) {
//         var overtimeWork = hours - 40
//         var overtimePay = overtimeWork * payPerHour
//         return overtimePay
//     }
//     else {
//         return "There's no overtime pay"
//     }
// }
// var result = overtimePay()
// document.write("Employee has worked " + hours + " hours.")
// document.write("<br> So, " + result )


// var amount = +prompt("Enter amount to withdraw!!")
// var hundred = 100;
// var fifty = 50;
// var ten = 10;
// var hundredCounter = 0;
// var fiftyCounter = 0;
// var tenCounter = 0;
// function withdrawer() {
//     while (amount >= hundred) {
//         amount -= hundred;
//         hundredCounter++
//     }  
//     while (amount >= fifty) {
//         amount -= fifty
//         fiftyCounter++
//     }
//     while (amount >= ten) {
//         amount -= ten
//         tenCounter++
//     }
//     document.write("You will have " + hundredCounter + " hundred notes " + fiftyCounter + " fifty notes " + tenCounter + " ten notes.")
// }
// withdrawer()


//              -------------Chapters 43-48-----------------


// function linkAlert() {
//     alert("You have clicked on a link")
// }


// function phoneAlert() {
    // alert("Thanks for Purchasing A Phone From Us.................")
// }



// function deleteRow(element) {
//     element.parentNode.parentNode.remove();
// }


// function img1toimg2() {
//     var img = document.getElementById("img1")
//     img.src = "img2.jpg"
// }
// function img2toimg1(e) {
//     e.src = "img1.jpg"
// }


// function countInc() {
//     var input = document.getElementById("input")
//     input.value = eval(+input.value + 1)
// }
// function countDec() {
//     var input = document.getElementById("input")
//     if(input.value > 0)
//     input.value = eval(+input.value - 1)
//     else{
//         input.value = 0;
//     }
// }


//              -------------Chapters 49-52-----------------

// var name_ = document.getElementById("name");
// var email = document.getElementById("email");
// var password = document.getElementById("pass");
// var contact = document.getElementById("contact");
// var para1 = document.getElementById("p1");
// var para2 = document.getElementById("p2");
// var para3 = document.getElementById("p3");
// var para4 = document.getElementById("p4");
// function submit() {
//     if (name_.value !== "" && email.value !== "" && password.value !== "" && contact.value!== "" ) {
//         para1.innerHTML = name_.value;
//         para2.innerHTML = email.value;
//         para3.innerHTML = password.value;
//         para4.innerHTML = contact.value;
//     }
//     else{
//         alert("Please fill up all the fields given");
//     };
// };


// var expPara = "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, whenthe sun does set. <a href=''>Hide Text</a>"
// var para = document.getElementById("para")
// function readMore() {
//     para.innerHTML = expPara
// }


// var table = document.getElementById("myTable")
// var input = document.getElementsByTagName("input")
// function deleteRow(element) {
    //     var i = element.parentNode.parentNode.rowIndex;
    //     table.deleteRow(i);
    // }
//     function editRow(e){
//     var name = document.getElementById("name");
//     var clas = document.getElementById("class");
//     var email = document.getElementById("email");
//     var contact = document.getElementById("contact");
//     console.log(e.parentNode.parentNode.firstElementChild)
//     name.value = e.parentNode.parentNode.firstElementChild.innerHtml;
//     clas.value = e.parentNode.parentNode.firstElementChild.nextElementSibling.innerHtml;
//     email.value = e.parentNode.parentNode.firstElementChild.nextElementSibling.nextElementSibling.innerHtml;
//     contact.value = e.parentNode.parentNode.lastElementChild.innerHtml;
// }