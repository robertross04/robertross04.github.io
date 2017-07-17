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

function submitButton(){
  $('#greet').show();
  var username = $('#username').val();
  var comment = $('#comments').val();
  $('#greet').text(username + ' said:');
  $('#feedback').text(comment)

}

$(document).ready(setup)
