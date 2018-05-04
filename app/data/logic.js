$(".submit").on("click", function () {
    runFriendsQuery();

});
function runFriendsQuery() {

    // Here we get the location of the root page.
    // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
    var currentURL = window.location.origin;

    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: currentURL + "/api/friends", method: "GET" })
      .then(function(friendsData) {

      // Here we are logging the URL so we have access to it for troubleshooting
        console.log("------------------------------------");
        console.log("URL: " + currentURL + "/api/friends");
        console.log("------------------------------------");

        // Here we then log the NYTData to console, where it will show up as an object.
        console.log(friendsData);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < friendsData.length; i++) {

        // Create the HTML Well (Section) and Add the table content for each reserved table
          var friendsSelection = $("<div>");
          friendsSelection.addClass("well");
          friendsSelection.attr("id", "friendsWell-" + i + 1);
          $("#friendsSelection").append(friendsSelection);

          var friendsNumber = i + 1;


          // Then display the remaining fields in the HTML (Section Name, Date, URL)
          $("#friendsWell-" + i + 1).append("<h2><span class='label label-primary'>" + friendsNumber + "</span> | " + friendsData[i].name + "</h2>");
        }
      });
  }