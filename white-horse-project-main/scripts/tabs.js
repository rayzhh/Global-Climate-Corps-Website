
$("#nathan-tab-button").click(function() {
  $("#nathan-content").removeClass("hidden");
  $("#laura-content").addClass("hidden");
  $("#overview-content").addClass("hidden");
  $("#nathan-tab-button").addClass("visited-button");
  $("#laura-tab-button").removeClass("visited-button");
  $("#overview-tab-button").removeClass("visited-button");
});

$("#laura-tab-button").click(function() {
  $("#laura-content").removeClass("hidden");
  $("#nathan-content").addClass("hidden");
  $("#overview-content").addClass("hidden");
  $("#laura-tab-button").addClass("visited-button");
  $("#nathan-tab-button").removeClass("visited-button");
  $("#overview-tab-button").removeClass("visited-button");
});

$("#overview-tab-button").click(function() {
  $("#overview-content").removeClass("hidden");
  $("#nathan-content").addClass("hidden");
  $("#laura-content").addClass("hidden");
  $("#overview-tab-button").addClass("visited-button");
  $("#laura-tab-button").removeClass("visited-button");
  $("#nathan-tab-button").removeClass("visited-button");
});
