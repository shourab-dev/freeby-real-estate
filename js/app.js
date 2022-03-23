$(function () {
  $(".navToggler").click(function () {
    $("#myCustomNav").css("width", "70%");
    $(this).hide();
  });
  $(".navTogglerClose").click(function () {
      $("#myCustomNav").css("width", "0%");
      $(".navToggler").show();

  });
});
