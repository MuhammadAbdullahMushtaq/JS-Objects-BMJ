// //              ---------------Object's Objects----------------

// var itemsArray = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: "3"
//     },
//     {
//         name: "cookie",
//         price: "30",
//         quantity: "9"
//     },
//     {
//         name: "shirt",
//         price: "880",
//         quantity: "1"
//     },
//     {
//         name: "pen",
//         price: "100",
//         quantity: "2"
//     }
// ]
// var totalItemPrice;
// var allTotalPrice = 0;
// for (var i = 0; i < itemsArray.length; i++) {
//     totalItemPrice = +itemsArray[i].price * +itemsArray[i].quantity
//     document.write("Total Price of item " + itemsArray[i].name + " is " + totalItemPrice + "<br>")
//     allTotalPrice += totalItemPrice
// }
// document.write("<br> Total of all prices is : " + allTotalPrice)


// var obj1 = {
//     name : "abdullah",
//     email : "123@gmail.com",
//     password : "********",
//     age : 21,
//     gender : "Male",
//     city : "Karachi",
//     country : "Pakistan"
// }
// document.write("Age exists in object: ", "age" in obj1 , "<br>")
// document.write("Country exists in object: ", "country" in obj1 , "<br>")
// document.write("FirstName exists in object: ", "firstName" in obj1 , "<br>")
// document.write("LastName exists in object: ", "lastName" in obj1 , "<br>")


// function Data(name, age, gender) {
//     this.name = name
//     this.age = age
//     this.gender = gender
//     this.getName = function() {
//         return this.name
//     }
//     this.getAge = function() {
//         return this.age
//     }
//     this.getGender = function() {
//         return this.gender
//     }
// }
// var std1 = new Data("Ammar", 21, "Male")
// var std2 = new Data("Ali", 21, "Male")
// document.write("Name of Student1: ",std1.getName(),"<br>")
// document.write("Age of Student1: ",std1.getAge(),"<br>")
// document.write("Gender of Student1: ",std1.getGender(),"<br><br>")
// document.write("Name of Student2: ",std2.getName(),"<br>")
// document.write("Age of Student2: ",std2.getAge(),"<br>")
// document.write("Gender of Student2: ",std2.getGender(),"<br>")


// function Check(){
//     this.name = prompt("Enter Name")
//     this.gender = prompt(`<p>Please select your Gender:</p>
//       <input type="radio" id="male" name="gender" value="male">
//       <label for="male">Male</label><br>
//       <input type="radio" id="female" name="gender" value="female">
//       <label for="female">Female</label><br>`)
//     this.address = prompt("Enter Address")
//     this.education = "GRADUATE";
//     this.profession = "ENGINEER";
// }
// var first = new Check()
// var second = new Check()