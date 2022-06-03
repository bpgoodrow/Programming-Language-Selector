$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    $("#output-user-info").show();

    event.preventDefault();
    $("form#user-info").trigger("reset");
  });

  $("form#user-input").submit(function(event) {
    event.preventDefault();
    $("form#user-input").trigger("reset");
    const learningStyle = $("select#learning-style").val();
    const optPes = $("select#opt-pes").val();
    const rainSun = $("select#rain-sun").val();
    // const option = $("input:option[name=option]:selected").val();

    if (learningStyle === "Logical") {
      $("#suggestion1").show();
    } else if (learningstyle === "Creative" && optPes === "Optimist") {
      $("#suggestion2").show();
    } else (OptPes === "Pessimist"); {
      $("#suggestion3").show();
    };
  });
});