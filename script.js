//get input value from on click 
//grab input value and store in local storage
//check current time
// get chosen time block by iterating over time blocks
//append classes
//add current date to page (currentDay)

$(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".textInput").val();
        var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
 });

 function getHour() {
     var currentTime = moment().hours();

    //  for (var i = 9; i<18; i++) ?? 

     $(".timeBlock").each(function() {
         var hourBlock = parseInt($(this).attr("id"));

         if (hourBlock < currentTime){
             $(this).addClass("past");
         } else if (hourBlock === currentTime){
            //  $(this).removeClass('past').addClass('present'); 
            $(this).removeClass("past");
            $(this).addClass("present");
         } else {
             $(this).removeClass("past");
             $(this).removeClass("present");
             $(this).addClass("future");
         }
     })
 }

getHour();

var interval = setInterval(getHour, 15000);

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("1"));
$("#14 .description").val(localStorage.getItem("2"));
$("#15 .description").val(localStorage.getItem("3"));
$("#16 .description").val(localStorage.getItem("4"));
$("#17 .description").val(localStorage.getItem("5"));

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
});



