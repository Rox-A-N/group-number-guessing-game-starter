$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  // counts Rounds
  $('.submit-button').on('click', submissionCounter);

  // store player info
  $('.submit-button').on('click', storeUserInput);
}

let counter = 0;

function submissionCounter(){
    console.log('increase!')
    counter += 1;
    $('.update-round').empty().append(`Round: ${counter}`);
}

let userInputHistory = [];

function storeUserInput() {
  roundPlayed = {
    player1: $('.user1-input-guess').val(),
    player2: $('.user2-input-guess').val(),
    player3: $('.user3-input-guess').val(),
    player4: $('.user4-input-guess').val(),
    };
  userInputHistory.push(roundPlayed);
  console.log(userInputHistory);

  $('inputs').val('');
  postRequest();
}

function postRequest(){
  $.ajax({
      method: 'POST',
      url: '/players',
      data: userInputHistory,
  })
}