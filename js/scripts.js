$(document).ready(function() {
  // //Backend
  // constructor
  // prototype Contact [names, street, city, state]
  // //Frontend
  function Contact(first, last, street, city, state) {
    this.first = first;
    this.last = last;
    this.street = street;
    this.city = city;
    this.state = state;
  };
  // var newContact = Contact(firstName, lastName)
//  form input
  var contactSections = ["firstName", "lastName", "street", "city", "state"]
  var counter = 0;

  $("#add-address").click(function(event) {
    $("#addressSection").append('<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input class="form-control new-street" type="text">' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input class="form-control new-city" type="text">' +
    '</div>' +
    '<div class="form-group">' +
      '<label for="new-state">State</label>' +
      '<input class="form-control new-state" type="text">' +
    '</div>');



  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    counter += 1;
    var lastName = $("#new-lastName").val();
    var firstName = $("#new-firstName").val();
  if (!(lastName || firstName)) {
    //warn of invalid input, ask for a name
    alert("error caught");
  } else {
    console.log(firstName + lastName);
    $("#contactList").append("<li>" + firstName + " " + lastName + "</li>");
    // var ["firstName + lastName"] = new Contact(firstName,lastName);
    // console.log("firstName + lastName");
    // console.log(firstName + lastName);




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
