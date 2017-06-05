var apiKey = require('./../.env').apiKey;

function Doctor(name, address, phone) {
  this.name = name;
  this.address = address;
  this.phone = phone;
}

function DoctorList() {
}

DoctorList.prototype.getDoctors = function(medicalIssue, displayList) {
  console.log('Get the Doctor');
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=47.606209%2C-122.332071%2C10&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
      displayList(result);

    }).fail(function(error){
       $('#doctor-list').text('error');
     });
};
exports.doctorModule = Doctor;
exports.listModule = DoctorList;
