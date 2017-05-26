var apiKey = require('./../.env').apiKey;

function Doctor(name, address, phone) {
  this.name = name;
  this.address = address;
  this.phone = phone;
}
exports.doctorModule = Doctor;
// This file will make an API request and display results
exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=47.606209%2C-122.332071%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      $('#doctor-list').empty();
      for (i = 0; i < result.meta.count; i++) {
        var profile = result.data[i].profile;
        var practice = result.data[i].practices[0]
        var name = profile.first_name + " " + profile.last_name + " " + profile.title;
        var phone = practice.phones[0].number;
        var address = practice.visit_address.street + ", " + practice.visit_address.street2 + ", " + practice.visit_address.city;
        doctor = new Doctor(name, address, phone);
        $('#doctor-list').append('<li class="doctor">' + doctor.name + '<ul class="contact"><li>Address: '+ doctor.address + '</li><li>Phone: ' + phone + '</li></ul></li>');
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};







// exports.getDoctors = function(medicalIssue) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//   .then(function(result) {
//      console.log(result);
//    })
//     $('#doctorList').empty();
//     for (i = 0; i < result.meta.count; i++) {
//       var profile = result.data[i].profile;
//       var name = profile.first_name + " " + profile.last_name + " " + profile.title;
//       $('#doctorList').append('<li>' + name + '</li>');
//     }
//   }),
//   .fail(function(error){
//      console.log("fail");
//    });
// };
