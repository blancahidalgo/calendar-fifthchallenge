// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// DOES THIS CODE GO AT THE VERY BOTTOM?
// $(document).ready(function() {
//   // Your code that interacts with the DOM goes here
//   // For example:
//   $('button').click(function() {
//     $('p').toggle();
//   });
// });

//This will log the current date & time within the header
var currentTime = dayjs().format('dddd,MMM D,YYYY h:mm A');
$('#currentDay').text(currentTime);

// This function will keep track of the current time to flick block colours a bit later
function hourUpdater() {
var currentTime = dayjs().format('h:mm A');
}
//This will loop over time blocks and the vairable & ifs will start comparing bloclHour versus currentTime
$('.time-block').each(function () {
  var blockHour = parseInt($(this).attr('id').split('-')[1]);

  if (blockHour < currentTime) {
    $(this).addClass('past');
  } else if (blockHour === currentTime) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});














// //this function will change colors when the time has past
// $(function () {
//   var hour = dayjs().format('h');
//   if (hour < 9) {
//     // Change color to green
//     $('body').css('background-color', 'green');
//     } else {
//     // Do nothing
//     }
//     });

  //if hour is less than 9 change to green
  //if hour is equal to 9 change to red
  //if hour is greater than 9 change to gray
  //if hour is less than 10 change to green
  //if hour is equal to 10 change to red 
  //if hour is greater than 10 change to gray

});

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  
  // TODO: Add code to display the current date in the header of the page.
