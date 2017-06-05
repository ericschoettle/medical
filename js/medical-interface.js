var DoctorList = require('./../js/medical.js').listModule;
var Doctor = require('./../js/medical.js').doctorModule;

var displayList = function(result) {
  $('#doctor-list').empty();
  for (i = 0; i < result.meta.count; i++) {
    var profile = result.data[i].profile;
    var practice = result.data[i].practices[0];
    var name = profile.first_name + " " + profile.last_name + " " + profile.title;
    var phone = practice.phones[0].number;
    var address = practice.visit_address.street + ", " + practice.visit_address.street2 + ", " + practice.visit_address.city;
    doctor = new Doctor(name, address, phone);
    $('#doctor-list').append('<li class="doctor">' + doctor.name + '<ul class="contact"><li>Address: '+ doctor.address + '</li><li>Phone: ' + phone + '</li></ul></li>');
  }
};

$(document).ready(function() {
  var currentList = new DoctorList();
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('.results').show();
    var medicalIssue = $('#medicalIssue').val();
    var myList = currentList.getDoctors(medicalIssue, displayList);
  });
  $('ul').on('click', 'li', function() {
    $(this.children).toggle();
  });
});
