$(document).ready(function() {
  $('form#new-contact').submit(function(event){
    var inputtedFirstName = $("#new-firstname").val();
    var inputtedLastName = $("#new-lastname").val();
    var newContact = {
    firstname: inputtedFirstName,
    lastname: inputtedLastName,
    addresses: [],
    phone: [],
    email: []
    }

    $(".new-addresses").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = {
            street: inputtedStreet,
            city: inputtedCity,
            state: inputtedState
        };
        newContact.addresses.push(newAddress);
    });

    $(".new-phone-email").each(function() {
        var inputtedPhone = $(this).find("input.new-phone").val();
        var inputtedEmail = $(this).find("input.new-email").val();
        var newPhone = {
                phone: inputtedPhone,

        };
        var newEmail = {
            email: inputtedEmail
        };

        newContact.phone.push(newPhone);
        newContact.email.push(newEmail);

    });

    $("#second-column").show();

    $("#contacts").append("<li><span class='contacts'>"  + newContact.firstname
        + " " + newContact.lastname + "</span></li>");

    $("#new-contact").find("input").val("");

    $(".contacts").last().click(function() {
        $("#third-column").show();
        $("#third-column h2").text(newContact.firstname + " " + newContact.lastname)
        $("#first-name").text(newContact.firstname);
        $("#last-name").text(newContact.lastname);
        $("ul#address").text("");
        $("ul#email").text("");
        $("ul#phone").text("");

        newContact.addresses.forEach(function(address){
            $("#address").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
        });

        newContact.phone.forEach(function(phonenumber) {
            $("#phone").append("<li>" + phonenumber.phone + "</li>");
        });

        newContact.email.forEach(function(emailaddress) {
            $("#email").append("<li>" + emailaddress.email + "</li>");
        });
     });
    event.preventDefault();
    });

    $("#add-address").click(function() {
        $("#new-addresses").append('<div class="new-addresses">' +
                '<div class="form-group">' +
                '<label for="new-street">Street</label>' +
                '<input type="text" class="form-control new-street">' +
                '<label for="new-city">City</label>' +
                '<input type="text" class="form-control new-city">' +
                '<label for="new-state">State</label>' +
                '<input type="text" class="form-control new-state">' +
                '</div>');
        // event.preventDefault();
    });

    $("#add-email-phone").click(function() {
        $("#new-phone-email").append('<div class="new-phone-email">' +
              '<div class="form-group">' +
                '<label for="new-phone">Phone Number</label>' +
                '<input type="text" class="form-control new-phone">' +
                '<label for="new-email">Email Address</label>' +
                '<input type="text" class="form-control new-email">' +
               '</div>' +
               '</div>');

});













});

