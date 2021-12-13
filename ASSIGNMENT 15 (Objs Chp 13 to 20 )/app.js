//              --------------------Chapter 13----------------------

// var stdNames = [];


// var stdNames = new Array();


// var strings = ["Ali", "Ahmed", "Ammar"];


// var numbers = [100, 90, 90];


// var booleans = [true, false, false, true];


// var array = ["Abdullah", 20, true];


// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("Qualifications: <br> <br>");
// for(var i = 0 ; i < qualifications.length ; i++){
//     document.write( i + 1 + ") " + qualifications[i] + ".<br>");
// }


// var names = ["Mushtaq", "Ammar", "Ali"];
// var scores = [350, 410, 270];
// var totalMarks = 500;
// for(var i = 0 ; i < 3 ; i++){
//     document.write("Score of " + names[i] + " is " + scores[i] + ".<br>");
//     document.write(" Percentage: " + (scores[i]/totalMarks*100) + "% <br>");
// }


// var colors = ["red", "green", "blue"];
// document.write("Colors Array at Beginning: [" + colors + "].<br><br>");
// var addS = prompt("Name the color to add in the beginning of array");
// colors.unshift(addS);
// document.write("a) Array after adding user color in start: [" + colors + "].<br><br>");
// var addL = prompt("Name the color to add in the end of array");
// colors.push(addL);
// document.write("b) Array after adding user color in last: [" + colors + "].<br><br>");
// colors.unshift("white", "black");
// document.write("c) Array after hardcoding 2 colors in start: [" + colors + "].<br><br>");
// colors.shift();
// document.write("d) Array after deleting a color from start: [" + colors + "].<br><br>");
// colors.pop();
// document.write("e) Array after deleting a color from last: [" + colors + "].<br><br>");
// var indexNum = +prompt("Enter index where you want to add the new color");
// var addI = prompt("Name the color to add at previous entered index");
// colors.splice(indexNum, 0, addI);
// document.write("f) Array after adding user color at desired index: [" + colors + "].<br><br>");
// var indexNum = +prompt("Enter index from where you want start delete");
// var countNum = +prompt("Enter how many values you want to delete from the desired index");
// colors.splice(indexNum, countNum);
// document.write("g) Array after deleting color(s) from desired index and count: [" + colors + "].<br><br>");


// var stdScores = [320, 230, 480, 120];
// document.write("<br>Scores of Students: " + stdScores + "<br><br>");
// stdScores.sort();
// document.write("Ordered Scores of Students: " + stdScores);


// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "RawalPindi"];
// var selectedCities = cities.slice(1, 4);
// document.write("Cities List <br>");
// document.write(cities + "<br><br>");
// document.write("Selected Cities List <br>");
// document.write(selectedCities);


// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br>[" + arr + "]<br> <br>");
// var string = arr.join(" ");
// document.write("String: <br>" + string);


// var arrayy = [];
// arrayy.push("keyboard");
// arrayy.push("mouse");
// arrayy.push("printer");
// arrayy.push("monitor");
// document.write("Devices: <br>[" + arrayy + "]<br><br>");
// for(var i = 0 ; i < 4 ; i++ ){
//     document.write("Out: <br>[" + arrayy.shift() + "]<br>");
// }


// var arrayy = [];
// arrayy.push("keyboard");
// arrayy.push("mouse");
// arrayy.push("printer");
// arrayy.push("monitor");
// document.write("Devices: <br>[" + arrayy + "]<br><br>");
// for(var i = 0 ; i < 4 ; i++ ){
//     document.write("Out: <br>[" + arrayy.pop() + "]<br>");
// }


// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("Dropdown: <br><br>");
// for(var i = 0 ; i < phones.length ; i++ ){
//     document.write("@ " + phones[i] + "<br>");
// }


//              --------------------Chapter 14---------------------

// var multiDArray = [[], [], [], []];


// var mulDimArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (var i = 0 ; i < mulDimArr.length ; i++) {
//     for (var j = 0 ; j < mulDimArr[i].length ; j++) {
//         document.write(mulDimArr[i][j] + " ");
//     };
//     document.write("<br>");
// }


// for(var i = 1 ; i <= 10 ; i++ ){
//     document.write(i + "<br>");
// };


// var table = +prompt("Enter a Number to Show its Multiplication Table....");
// var length = +prompt("Enter Length of Multiplication Table...");
// document.write("Multiplication table of: " + table + "<br>");
// document.write("Length: " + length + "<br><br>");
// for(var i = 1 ; i <= length ; i++ ){
//     document.write(table + " x " + i + " = " + table*i + "<br>");
// };


// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// for(var i = 0 ; i < fruits.length ; i++ ){
//     document.write("<br/>"+fruits[i] + "<br>");
// };
// document.write("<br>");
// for(var j = 0 ; j < fruits.length ; j++){
//     document.write("<br/>Element at index " + j + " is " + fruits[j] + "<br>");
// };


// document.write("<h3>Counting:</h3><br>");
// for(var i = 1 ; i <= 15 ; i++ ){
//     document.write(i + ", ");
// };
// document.write("<br> <h3>Reverse Counting:</h3><br>");
// for(var a = 10 ; a >= 1 ; a--){
//     document.write(a + ", ");
// };
// document.write("<br> <h3>Even:</h3><br>");
// for(var b = 0 ; b <= 20 ; b = b+2){
//     document.write(b + ", ");
// };
// document.write("<br> <h3>Odd:</h3><br>");
// for(var c = 1 ; c <= 20 ; c = c+2){
//     document.write(c + ", ");
// };
// document.write("<br> <h3>Series:</h3><br>");
// for(var j = 2; j <= 20 ; j = j+2){
//     document.write(j + "k, ");
// };


// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter Your Bakery Item....");
// var flag = false;
// for(var i = 0 ; i < arr.length ; i++ ){
//     if(userInput == arr[i]){
//         document.write(userInput + " is Available at index " + i + " in Bakery");
//         flag = true;
//     };
// };
// if(flag == false){
//     document.write("We are sorry " + userInput + " is not Available in our Bakery.");
// };


// var array = [24, 53, 78, 91, 12];
// var largest= 0;
// for(var i = 0 ; i <= array.length ; i++ ){
//     if(array[i] > largest){
//         var largest = array[i];
//     };
// };
// document.write("<br>----Array items: " + array + "<br>");
// document.write("<br>----The largest number is " + largest);


// var array = [24, 53, 78, 91, 12];
// var smallest = array[0];
// for(var i = 0 ; i <= array.length ; i++ ){
//     if(array[i] < smallest){
//         var smallest = array[i];
//     };
// };
// document.write("<br>----Array items: [" + array + "]<br>");
// document.write("<br>----The smallest number is " + smallest);


// for(var i = 5 ; i <= 100 ; i = i + 5 ){
//     document.write(i + "<br/><br/>");
// };