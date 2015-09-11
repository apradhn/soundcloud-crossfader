$(function() {
  SC.initialize({
    client_id: '81eaf8f6864fc6b8e13419c0628918d6'
  });  

  $('.search form').submit(function(event) { 
    event.preventDefault();
    var deck = $(this).data('deck');
    var parent = $("#"+deck);
    var nextSibling = $(this).next();
    var query = $(this).children('input[name="query"]').val();
    console.log(query);
    var list = '';
    var trackTitle;
    var searchResults = $('#' + deck + ' .search-results')

    SC.get('/tracks', {q: query}, function(tracks) {
      console.log(tracks);
      tracks = tracks.slice(0, 5);
      tracks.forEach(function(track) {
        trackTitle = track.title;
        if (trackTitle.length > 40) {
          trackTitle = trackTitle.slice(0, 37) + '...';
        }
        list += '<div class="track">';
        list += '<div class="add" data-track-url="'+track.uri+'" data-deck="'+deck+'" data-artwork-url="'+track.artwork_url+'" data-track-title="'+trackTitle+'">';
        list += 'add</div>';
        list += '<div class="track-info" data-track-url="'+track.uri+'" data-deck="'+deck+'">';
        list += '<div class="track-title">' + trackTitle + '</div>';
        list += '<div class="username">' + track.user.username + '</div>';
        list += '</div>';
        list += '</div>';
      });
      searchResults.html(list);
    });
  });

  $(document).on('click', '.track-info', function() {
    var trackUrl = $(this).data('track-url');
    var deck = $(this).data('deck');
    var iframe = $('#'+deck+' .widget iframe')[0];
    updateWidget(trackUrl, iframe)
  });

  function updateWidget(url, iframe) {
    var iframeId = iframe.id;
    var widget = SC.Widget(iframe);
    var options = {"single_active": false, "visual": true}
    widget.load(url, options);
  }
});