// This file will retrieve form input

//test code
var getDoctors = require('./../js/medical.js').getDoctors;
$(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    var location = $('#location').val().toLowerCase();
    getDoctors(medicalIssue);
  });
});

//end test code
