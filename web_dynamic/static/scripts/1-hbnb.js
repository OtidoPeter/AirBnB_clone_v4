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
