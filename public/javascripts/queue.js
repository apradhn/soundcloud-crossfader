$(function() {
  $(document).on('click', '.add', function() {
    var trackUrl = $(this).data('track-url');
    var artworkUrl = $(this).data('artwork-url');
    var deck = $(this).data('deck');
    var trackTitle = $(this).data('track-title');
    console.log(trackTitle);
    var queueItem = $('<div/>', {
      addClass: 'queue-item',
      html: trackTitle
    });
    $('#'+deck+' .queue').append(queueItem);
  });
});