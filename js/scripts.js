$(document).ready(function() {
  // //Backend
  // constructor
  // prototype Contact [names, street, city, state]
  // //Frontend

//  form input
var contactSections = ["firstName", "lastName", "street", "city", "state"]


$("form#new-contact").submit(function(event) {
  event.preventDefault();
    var lastName = $("#new-lastName").val();
    var firstName = $("#new-firstName").val();
  if (!(lastName || firstName)) {
    //warn of invalid input, ask for a name
    alert("error caught");
  } else {
    console.log(lastName + firstName);
    //the rest
  }
    // var contactSections = contactSections.map(function(input) {
    //   return ("input#new-" + input).val();
    // });



    // console.log(userInput);
    // parsing fields
    // output into contacts
    //
    // click contact to get full info
  });

});
