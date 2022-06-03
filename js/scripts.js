$(document).ready(function() {
  $("form#info").submit(function(event) {
    $("#output-user-info").show();

    event.preventDefault();
  });
});