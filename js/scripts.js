$(document).ready(function() {
  $(".card").click(function() {
    $(this).find(".definition").fadeToggle();
  });
});
