var apiKey = require('./../.env').apiKey;

// This file will make an API request and display results
exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      $('#doctorList').empty();
      for (i = 0; i < result.meta.count; i++) {
        var profile = result.data[i].profile;
        var name = profile.first_name + " " + profile.last_name + " " + profile.title;
        $('#doctorList').append('<li>' + name + '</li>');
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
