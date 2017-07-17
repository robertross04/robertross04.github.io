function setup(){
  $('#greet').hide();
  $('#submit').click(submitButton);
  $('#comments').on('keypress',handleKey)
}
function handleKey(event){
  if(event.keyCode == 13){
    submitButton();
  }
}
function animateButton(){
  $('#submit').fadetoggle(500,.6);
  $('#submit').fadetoggle(100,1);
}
function submitButton(){
  $('#greet').show();
  var username = $('#username').val();
  var comment = $('#comments').val();
  $('#greet').text(username + ' said:');
  $('#feedback').text(comment)
  animateButton();
}

$(document).ready(setup)
