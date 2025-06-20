$(document).ready(function () {
 
  $('#add-btn').on('click', function () {
    var item = $('#todo-input').val();
    if (item !== '') {
      $('#todo-list').append('<li>' + item + ' <span class="delete-btn">X</span></li>');
      $('#todo-input').val('');
    }
  });


  $('#todo-list').on('click', 'li', function () {
    $(this).toggleClass('completed');
  });


  $('#todo-list').on('click', '.delete-btn', function () {
    $(this).parent().remove();
  });
});
