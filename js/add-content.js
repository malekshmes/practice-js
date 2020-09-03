// var today = new Date();
// var hourNow = today.getHours();

// function greeting(){
//   // input
//   var hourNow = prompt("what is the time?")
//   var greeting;


//   // proccessing
//   if (hourNow > 18 && hourNow <=23) {
//     greeting = "good evening class";
//   } else if (hourNow > 12 && hourNow <= 18) {
//     greeting = "good afternoon class";
//   } else if (hourNow>= 0 && hourNow <= 12) {
//     greeting = "good morning class";
//   }else{
//     greeting ="smth went wrong"
//   }
//   // output
//   return greeting;
// }

// // console.log("new greeting "+ greeting);
// document.write('<h3>' + greeting() + '</h3>');

// function divide(x,y){
//   console.log(x/y);
// }

// divide(10,10);
// divide(9,3);
var showOrder = function () {
  var userInput = prompt("what would you choose a house or hotel");

  while (userInput !== "hotel" && userInput !== "house"){
     userInput = prompt("what would you choose a house or hotel");
  }
  var userOrder= "";
  var numberOfImage = prompt("how many images would you like to print? ")
  for (var count = 0; count < numberOfImage; count++) {
    if (userInput == "house") {
      // document.write("<img src='images/house.png' alt=''");
      userOrder = userOrder + "<img src='images/house.png' alt=''>"
    }
    else if (userInput == "hotel")
      // document.write("<img src='images/hotel.png' alt=''");
      userOrder = userOrder + "<img src='images/hotel.png' alt=''>"

  }
    return userOrder;

  
}
