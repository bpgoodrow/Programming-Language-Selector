$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    $("#output-user-info").show();

    event.preventDefault();
    $("form#user-info").trigger("reset");
  });

  $("form#user-input").submit(function(event) {
    event.preventDefault();
    const learningStyle = $("#learning-style").val();
    const optPes = $("#opt-pes").val();
    const rainSun = $("#rain-sun").val();

    if (learningStyle === "Logical") {
      $("#suggestion1").show()
    } else if (optPes === "Optimist") {
      $("#suggestion2").show()
    } else if ( rainSun === "Rain") {
      $("#suggestion3").show()
    };
  });
});