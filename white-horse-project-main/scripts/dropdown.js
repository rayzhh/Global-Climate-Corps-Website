

$("#why-were-here-toggle-button").click(function() {
  if ($("#toggle-why-were-here").hasClass("hidden")) {
    $("#toggle-why-were-here").removeClass("hidden");
  } else {
    $("#toggle-why-were-here").addClass("hidden");
  }
  if ($("#upArrowWhy").hasClass("hidden")) {
    $("#upArrowWhy").removeClass("hidden");
    $("#downArrowWhy").addClass("hidden");
  } else {
    $("#upArrowWhy").addClass("hidden");
    $("#downArrowWhy").removeClass("hidden");

  }
});

$("#what-we-do-toggle-button").click(function() {
  if ($("#toggle-what-we-do").hasClass("hidden")) {
    $("#toggle-what-we-do").removeClass("hidden");
  } else {
    $("#toggle-what-we-do").addClass("hidden");
  }
  if ($("#upArrow").hasClass("hidden")) {
    $("#upArrow").removeClass("hidden");
    $("#downArrow").addClass("hidden");
  } else {
    $("#upArrow").addClass("hidden");
    $("#downArrow").removeClass("hidden");

  }
});
