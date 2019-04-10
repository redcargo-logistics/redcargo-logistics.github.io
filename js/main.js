var $form = $('form#signup-form'),
    url = 'https://script.google.com/macros/s/AKfycbw_MAJhTUi2xl2wK3YhANZrSalCXVs4fZogp_A_Au1Qk91vgTea/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})