"use strict";
// sidebar
let leftWidth = $(".sidebar .left").outerWidth();
console.log(leftWidth);
$(".sidebar .left").css("left", -leftWidth + "50px");

// $(".right").css("left",-leftWidth)
$(".right #icon").on("click", function () {
  $(".sidebar .left").animate({ left: "-70px" }, 1000);
  $(".right").animate({ left: leftWidth }, 1000);
});
$(".ico i").click(function () {
  $(".sidebar .left").animate({ left: -leftWidth - 65 + "px" }, 1000);
  $(".right").animate({ left: 0 }, 1000);
});
// container
$(".co1 p").eq(0).css("display", "block");
$(".co1 h2").on("click", function () {
  let parag = $(this).next("p");
  if ($(parag).css("display") == "none") {
    $(parag).slideDown(1000);
  } else {
    $(parag).slideUp(1000);
  }
});

//counter
function getCounterDown() {
  let futureDate = new Date("Dec 31, 2024 23:59:59").getTime();
  let countDown = setInterval(function () {
    let nowDate = new Date().getTime();
    let distance = futureDate - nowDate;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".ele1 .item h3").text(days + " " + "D");
    $(".ele2 .item h3").text(hours + " " + "H");

    $(".ele3 .item h3").text(minutes + " " + "M");
    $(".ele4 .item h3").text(seconds + " " + "S");
    if (distance < 0) {
      clearInterval(countDown);
    }
  }, 1000);
}
$(function () {
  getCounterDown();
});

// form

$("textarea").on("keydown", function () {
  let text = $(this).val().length;
  let remind = 100 - text;

  if (remind ==0) {
    $(".paragraph").html("maximum length is 100");
  } else {
    $(".changed-char").attr("maxlength", remind).html(remind);
  }
});
$(document).ready(function () {
        $(".loadingscreen").fadeOut(1000, function () {
          $(".loadingscreen").removeClass("d-flex");
          $("body").css("overflow", "auto");
        });
      });
      

// colorbox
$(".colorbox span").eq(0).css("backgroundColor", "#353330");
$(".colorbox span").eq(1).css("backgroundColor", "#8e7754");
$(".colorbox span").eq(2).css("backgroundColor", "gray");
$(".colorbox span").eq(3).css("backgroundColor", "lightgray");
$(".colorbox span").eq(4).css("backgroundColor", "#403d38");
$(".colorbox span").eq(5).css("backgroundColor", " black");
const outerwidth=$(".colorbox").outerWidth()

$(".colorbox").css("left",-outerwidth)
$(".colorbox .ico").click(function(){
if($(".colorbox ").css("left") =="0px"){
  $(".colorbox").animate({left:-outerwidth})
}else{
  $(".colorbox").animate({left:0})
}

})

$(".colorbox span").click(function(e){
        const bgcolor=$(e.target).css("backgroundColor")
      $("h1,h2,h3,h4,h5,p,span,#icon").css("color",bgcolor)
      })