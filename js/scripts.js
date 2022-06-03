$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    $("#output-user-info").show();

    event.preventDefault();
  });

  $("form#user-input").submit(function(event) {
    const learningStyle = $("select#learning-style").val();
    const optPes = $("select#opt-pes").val();
    const rainSun = $("select#rain-sun").val();

    let reveal = "#suggestion1";
    if (learningStyle === 'Logical' || rainSun === 'Rain');
    else if

    $("#suggestion1").show();
    $("#suggestion2").show();
    $("#suggestion3").show();

    event.preventDefault();
  });
});