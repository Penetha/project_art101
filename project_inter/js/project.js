// JavaScript/jQuery script for handling dynamics among different pages and sections
// Author: Penetha Jayakumar, Diego
//21-Nov-2024

// To redirect to first page [base question] from the login page
$(document).ready(function() {
 $("#continue").click(function(event) {
   event.preventDefault(); // Prevent the default form submission behavior
   window.location.href = "../project.html"; // Redirect to the desired page
 });
});

// To redirect to first theme based on option selected in base question in first page
$(document).ready(function() {
 $("#continue").click(function(event) {
   event.preventDefault(); // Prevent the default form submission behavior
   window.location.href = "../project.html"; // Redirect to the desired page
 });
});

