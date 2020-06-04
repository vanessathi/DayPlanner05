//get input value from on click 
//grab input value and store in local storage
//check current time
// get chosen time block by iterating over time blocks
//append classes
//add current date to page (currentDay)

$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
 });

 function getHour() {
     var currentTime = moment().hours();

    //  for (var i = 9; i<18; i++) ?? 

     $(".timeBlock").each(function() {
         var hourBlock = parseInt(
             $(this)
                .attr("id")
                .split("-")[1]
             );

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
     });
 }

getHour();

var interval = setInterval(getHour, 10000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

});



