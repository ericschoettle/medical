// This file will retrieve form input
var Doctor = require('./../js/medical.js').doctorModule;
//test code
var getDoctors = require('./../js/medical.js').getDoctors;
$(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('.results').show();
    var medicalIssue = $('#medicalIssue').val();
    // var location = $('#location').val().toLowerCase();
    getDoctors(medicalIssue);
  });
  $('ul').on('click', 'li', function() {
    $(this.children).toggle();
  });
  // $(".doctor").last().click(function() {
  //
  //   console.log('you clicked');
  // });
});



//end test code
