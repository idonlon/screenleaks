
$(document).ready(

  function(){

    $("#folder-one").click(function () {
      $("#drag-1").show();
    });

    $("#close").click(function () {
      $("#drag-1").hide();
    });
  });

 // MTURK TAGS
 //change to .toggle() if needed
 function toggler(divId) {
  $("#" + divId).show();
}

