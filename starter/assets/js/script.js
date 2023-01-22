// Show the current Day at the top
//  Use moment api and format todays date
//  Add to currentDay element
let currentDay = $('#currentDay')
let todaysDate = moment().format(' dddd, MMM Do');
currentDay.text(todaysDate)
let inputs = []

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
let thisHour = moment().format('HH')
let timeBlocks = $('.time-block')
$.each(timeBlocks, function(){
    var hour = parseInt($(this).attr('data-hour'))
    if(hour < thisHour){
        $(this).css({'background-color': '#d3d3d3', 'color': 'white'})
    }
    else if(hour == thisHour){
        $(this).css({'background-color': '#ff6961', 'color': 'white'})
    }
    else{
        $(this).css({'background-color': '#77dd77', 'color': 'white'})
    }
})


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

$('.saveBtn').on('click', function(event){
    event.preventDefault()
    let parent = $(this).parent()

    let input = parent.children('textarea').val()

    let time = parent.attr('data-hour')

    inputs.push({'time': time, 'input': input })
    inputs = JSON.stringify(inputs)

    localStorage.setItem('inputs', inputs)
    inputs = JSON.parse(inputs)

    var message = $("<br><br><br><p>"+ input + " has been saved into the diary... </p>").fadeOut(3000)
    currentDay.append(message)
})

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
$(document).ready(function() {
    var localStorageInput = localStorage.getItem('inputs')
    localStorageInput = JSON.parse(localStorageInput)
if(localStorageInput){
    
    localStorageInput.forEach( function(input){
        console.log(input.time)
        $('.time-block[data-hour="' + input.time + '"] textarea').val(input.input)
    })
}

})

