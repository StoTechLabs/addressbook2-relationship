$(document).ready(function() {
  $('form#new-contact').submit(function(event){
    var inputtedFirstName = $("#new-firstname").val();
    var inputtedLastName = $("#new-lastname").val();
    var newContact = {
    firstname: inputtedFirstName,
    lastname: inputtedLastName,
    addresses: []
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
    $("#second-column").show();
    $("#contacts").append("<li><span class='contacts'>"  + newContact.firstname
        + " " + newContact.lastname + "</span></li>")
     $("#new-contact").find("input").val("");
    $(".contacts").last().click(function() {
        $("#third-column").show();
        $("#third-column h2").text(newContact.firstname + " " + newContact.lastname)
        $("#first-name").text(newContact.firstname);
        $("#last-name").text(newContact.lastname);
        $("ul#address").text("");
        newContact.addresses.forEach(function(address){
            $("#address").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
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
});

