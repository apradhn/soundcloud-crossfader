$(function() {
  SC.initialize({
    client_id: '81eaf8f6864fc6b8e13419c0628918d6'
  });  

  $('.search').submit(function(event) { 
    event.preventDefault();
    var deck = $(this).next()
    var query = $('input[name="query"]').val();
    console.log(deck);
    console.log(query);
    var list;
    SC.get('/tracks', {q: query, license: 'cc-by-sa'}, function(tracks) {
      console.log(tracks);
      tracks = tracks.slice(0, 6);
      list = '<ul>';
      tracks.forEach(function(track) {
        list += '<li class="track" data-track-url="' + track.uri+ '">';
        list += track.title;
        list += " / " + track.user.username;
        list += '</li>';
      });
      list += "</ul>";
      deck.children('ul').replaceWith(list);
    });
  });

  $(document).on('click', '.user', function() {

  });

  $(document).on('click', '.track', function() {
    var trackUrl = $(this).data('track-url');
    var iframe = $('.widget iframe')[0];
    updateWidget(trackUrl, iframe)
  });

  function updateWidget(url, iframe) {
    var iframeId = iframe.id;
    var widget = SC.Widget(iframe);
    widget.load(url);
  }
});