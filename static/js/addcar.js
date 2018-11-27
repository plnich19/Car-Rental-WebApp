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

  $("#carform").submit(submitCar);

});

 // Reference to the recommendations object in your Firebase database
 var promotion = firebase.database().ref("promotion");

 // Save a new recommendation to the database, using the input in the form
 var submitPromo = function () {
 
   // Get input values from each of the form elements
   var DESCRIPTION = $("#DESCRIPTION").val();
   var DISCOUNT = $("#DISCOUNT").val();
   var img = $("#img").val();
 
   // Push a new recommendation to the database using those values
   promotion.push({
     "DESCRIPTION": DESCRIPTION,
     "DISCOUNT": DISCOUNT,
     "img": img
   });
 };
 $(window).load(function () {
 
   // event is triggered on that element, call submitRecommendation.
   $("#proform").submit(submitPromo);
 
 });

 // Reference to the recommendations object in your Firebase database
 var location = firebase.database().ref("location");

 // Save a new recommendation to the database, using the input in the form
 var submitLo = function () {
 
   // Get input values from each of the form elements
   var STREETNAME = $("#STREETNAME").val();
   var PHONE = $("#PHONE").val();
  var EMAIL = $("#EMAIL").val();
  var img = $("#img").val();
 
   // Push a new recommendation to the database using those values
   location.push({
    "STREETNAME": STREETNAME,
         "PHONE": PHONE,
         "EMAIL": EMAIL,
         "img": img
   });
 };
 $(window).load(function () {
 
   // event is triggered on that element, call submitRecommendation.
   $("#loform").submit(submitLo);
 
  });
  
 function changeTab(evt, tabLinkName, tabContent, tabContentName) {
  // Get all elements with class=tabContent and hide them
  var tabContent = document.getElementsByClassName(tabContent);
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }

  // Get all elements with class=tab and remove the class "active"
  var tab = document.getElementsByClassName(tabLinkName);
  for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace("active", "");
  }

  // Show the current tab content, and add an "active" class to the button that opened the tab
  document.getElementById(tabContentName).style.display = "block";
  evt.currentTarget.className += " active";
}
