// Show the current Day at the top
//  Use moment api and format todays date
//  Add to currentDay element

// Colour code each block based on current time
//  Create variables to target each time block
//  In the html add data-hour which represents which hour each element is
//  Create variable for moment().format(H) (0-23) e.g thisHour
//  timeBlocks = $('.timeblock')
//  timeblocks.each(function(this) {
//      var hour = this.attr('data-hour')
//      if(hour < thisHour) {    
//           this.css('background-color', pastColor)
//      else if(hout == thisHour)
//          this.css('background-color', presentcolor)
//       else
//          this.css('background-color, futureColor)    
//})

// Save input to local storage
//  create variable (an array) called inputs that will store all of the inputdata
// Add event listener to save button 
//  Add preventDefault inside the click event listener
//  push input value to inputs array with the format of (time: xx. input: xxx)
//  
// Get the input value
//      Get hour value
//      Push to the inputs array if the hour entry does not exist in array
//      Replace the existing entry if the hour entry exists already
// save inputs variable to local storage 
//      Stringify the inputs array
//  Show feedback message to the user (optional)
//  the feedback needs to disappear automatically
// 
//  Example of inputs array format 
// var inputs = [{
//     time: 9,
//     input: 'Meeting',
//     time: 10,
//     input: 'Coffee'
//      }]   
//  


// load input from local storage when page loads.refresh if theres any data in local storage
//      var localStorageInput = get data from local storage 
//    check if localStorageInput exists, if it is
//      var parsedLocalStorageInput = parse LocalStorageInput
//      populate the inputs with value from parsedLocalStorageInput
//      inputs.foreach(function(input){
//      inputs => {
//             time: 9,
//             input: meeting
//          }
//          $('timeblock'[data-hour="' + inputTime + '"] textarea').val(input.input)
// })
//  if theres noo data in local storage, do nothing

// Extra, user feedback when they save the timeblock
// Extra, add hover on the save button

