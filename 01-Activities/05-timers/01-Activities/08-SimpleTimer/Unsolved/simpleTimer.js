// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
let afterFive = setTimeout(function() {
  fiveSeconds()}, 5000)
//  after 10 seconds, execute the tenSeconds function
let afterTen = setTimeout(function() {
  tenSeconds()}, 10000)
//  after 15 seconds, execute the timeUp function
let afterFifteen = setTimeout(function() {
  timeUp()
}, 15000)

// ---------------------
// CODE STEP TWO HERE
// ---------------------

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 10 Seconds Left!
  $("#time-left").html("<h2>About Ten Seconds Left!</h2>")
  // console log 10 seconds left
  console.log('ten seconds left')
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").html("<h2>About five Seconds Left!</h2>")
  // console log 10 seconds left
  console.log('five seconds left')
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  $("#time-left").html("<h2>Time's up!</h2>")
  // console log done
  console.log('done')
  // The following line will play the audio file above
  audio.play();
}
