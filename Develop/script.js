
//This will log the current date & time within the header

$(document).ready(function () {
  var currentTime = dayjs().format('dddd,MMM D,YYYY h:mm A');
  $('#currentDay').text(currentTime);
  
  // This function will keep track of the current time to flick block colours a bit later
  function updateTime() {
  var currentTime = dayjs().hour();
  
   $('.time-block').each(function () {
    var blockTime = parseInt($(this).attr('id').split('-')[1]);
  
  
  //if blockTime is xxx (past, present or future) - it's allocating a class with (this).addClass, according to past, present, future 
    if (blockTime < currentTime) {
      $(this).addClass('past');
    } else if (blockTime === currentTime) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
  }

  updateTime()
 
   // This saves the textarea to localStorage when the save button is clicked (still missing button)
  $('.saveBtn').on('click', function () {
    var textArea = $(this).siblings('.description').val();

    var time = $(this).parent().attr('id');
    localStorage.setItem(time, textArea);
  });

  // repeat this for eveery time block
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
})





  

  