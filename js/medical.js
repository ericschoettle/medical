var apiKey = require('./../.env').apiKey;

function Doctor(name, address, phone) {
  this.name = name;
  this.address = address;
  this.phone = phone;
}

function DoctorList() {
}

DoctorList.prototype.getDoctors = function(medicalIssue) {
  console.log('Get the Doctor');
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=47.606209%2C-122.332071%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
      console.log(result);
      for (i = 0; i < result.meta.count; i++) {
        var profile = result.data[i].profile;
        var practice = result.data[i].practices[0];
        var name = profile.first_name + " " + profile.last_name + " " + profile.title;
        var phone = practice.phones[0].number;
        var address = practice.visit_address.street + ", " + practice.visit_address.street2 + ", " + practice.visit_address.city;
        console.log(name);
      }
// ^^^where i left off....



      displayList(medicalIssue);
    }).fail(function(error){
       $('#doctor-list').text('error');
     });
};

exports.listModule = DoctorList;
