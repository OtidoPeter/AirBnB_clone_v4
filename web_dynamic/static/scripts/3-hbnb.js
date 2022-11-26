$('document').ready(function () {
  const url = 'http://' + window.location.hostname + ':5000/api/v1/status/';
  $.get(url, function (response) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  })
})

$.ajax()

const storeAmenity = Array();

$(function () {
  const getCheckbox = $('checkbox');
  getCheckbox.click(function () {
    const $this = $(this);
    if ($this.is(':checked')) {
      storeAmenity.push($(':amenity_id'));
    } else { storeAmenity.pop($(':amenity_id')); }
  });
});

const getDiv = $('.amenities#h4');

// getDiv.
