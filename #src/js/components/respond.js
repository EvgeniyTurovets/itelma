$(function () {
  $('input').each(function () {
    $(this).val($(this).attr('holder'));
  });

  $('input').focus(function () {
    if ($(this).attr('holder') == $(this).val()) {
      $(this).val('');
    }
  });
  $('input').focusout(function () {
    if ($.trim($(this).val()) == '') {
      var holder = $(this).attr('holder');
      $(this).val(holder);
    }
  });
});