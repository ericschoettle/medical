// This file will retrieve form input
var Doctor = require('./../js/medical.js').doctorModule;

var getDoctors = require('./../js/medical.js').getDoctors;
$(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('.results').show();
    var medicalIssue = $('#medicalIssue').val();
    getDoctors(medicalIssue);
  });
  $('ul').on('click', 'li', function() {
    $(this.children).toggle();
  });

});
