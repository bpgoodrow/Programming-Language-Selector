$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    $("#output-user-info").show();

    event.preventDefault();
    $("form#user-info").trigger("reset");
  });

  $("form#user-input").submit(function(event) {
    event.preventDefault();
    $("#suggestion1").hide()
    $("#suggestion2").hide()
    $("#suggestion3").hide()
    const learningStyle = $("#learning-style").val();
    const optPes = $("#opt-pes").val();
    const rainSun = $("#rain-sun").val();

    if (learningStyle === "Logical" && optPes === "Optimist" && rainSun === "Rain") {
      $("#suggestion1").show()
    } else if (learningStyle === "Creative" || optPes === "Pessimist") {
      $("#suggestion2").show()
    } else if ( rainSun === "Sun") {
      $("#suggestion3").show()
    };
  });
});