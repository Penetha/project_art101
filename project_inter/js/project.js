// JavaScript/jQuery script for handling dynamics among different pages and sections
// Author: Penetha Jayakumar, Diego
//21-Nov-2024

// To redirect to first page [base question] from the login page
$(document).ready(function() {
 $("#continue").click(function(event) {
   event.preventDefault(); // Prevent the default form submission behavior
   // Get the values from the input fields
   const firstName = $("#fname").val();
   const lastName = $("#lname").val();
   // Check if both first name and last name are entered
   if (firstName.trim() !== "" && lastName.trim() !== "") {
     window.location.href = "./project.html"; // Redirect to the desired page
   } else {
     // Display an error message or alert if either field is empty
     alert("Please enter both your first name and last name.");
   }
 });
});

