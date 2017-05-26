// This file will retrieve form input

//test code
var getDoctors = require('./../js/medical.js').getDoctors;
$(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    var specialty = $('#specialty').val();
    var location = $('#location').val();
  });
});
getDoctors(medicalIssue);
//end test code
