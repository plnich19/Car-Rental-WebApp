(function () {
    // Initialize Firebase
   const config = {
     apiKey: "AIzaSyAFKdrpw1A3rndo-q-iCor-6BMcW15MmCo",
     authDomain: "carryrental.firebaseapp.com",
     databaseURL: "https://carryrental.firebaseio.com",
     projectId: "carryrental",
     storageBucket: "carryrental.appspot.com",
     messagingSenderId: "44637103764"
   }
   firebase.initializeApp(config)
 }())

 // Reference to the recommendations object in your Firebase database
var car = firebase.database().ref("car");

// Save a new recommendation to the database, using the input in the form
var submitCar = function () {

  // Get input values from each of the form elements
  var carBRAND = $("#carBRAND").val();
  var carNAME = $("#carNAME").val();
  var carPRICE = $("#carPRICE").val();
  var carTYPE = $("#carTYPE").val();
  var img = $("#img").val();

  // Push a new recommendation to the database using those values
  car.push({
    "carBRAND": carBRAND,
    "carNAME": carNAME,
    "carPRICE": carPRICE,
    "carTYPE": carTYPE,
    "img": img
  });
};

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // event is triggered on that element, call submitRecommendation.
  $("#carform").submit(submitCar);

});
