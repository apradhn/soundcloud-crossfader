$(function() {
  $(document).on('click', '.add', function() {
    var trackUrl = $(this).data('track-url');
    var artworkUrl = $(this).data('artwork-url');
    var deck = $(this).data('deck');
    var trackTitle = $(this).data('track-title');
    console.log(trackTitle);
    var queueItem = $('<div/>', {
      addClass: 'queue-item',
      html: trackTitle,
      attr: {'data-track-url': trackUrl}
    });
    $('#'+deck+' .queue').append(queueItem);
  });

  $('.deck').each(function() {
    var id = this.id;
    var widget = SC.Widget(id+'-track');
    var trackUrl;

    widget.bind(SC.Widget.Events.FINISH, function() {
      var queueItems = $('#'+id+' .queue .queue-item');

      if (queueItems.length) {
        var track = queueItems;
        var iframe = $('#'+id+' iframe')[0];
        console.log(track);
        trackUrl = track.data('track-url');
        updateWidget(trackUrl, iframe);
      }
    })
  });
});