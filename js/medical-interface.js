var DoctorList = require('./../js/medical.js').listModule;

var displayList = function(medicalIssue) {
  $('#doctor-list').empty();
  doctor = new Doctor(name, address, phone);
  $('#doctor-list').append('<li class="doctor">' + doctor.name + '<ul class="contact"><li>Address: '+ doctor.address + '</li><li>Phone: ' + phone + '</li></ul></li>');
};

$(document).ready(function() {
  var currentList = new DoctorList();
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('.results').show();
    var medicalIssue = $('#medicalIssue').val();
    var myList = currentList.getDoctors(medicalIssue);
  });
  $('ul').on('click', 'li', function() {
    $(this.children).toggle();
  });
});
