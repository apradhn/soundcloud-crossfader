$(function() {
  SC.initialize({
    client_id: '81eaf8f6864fc6b8e13419c0628918d6'
  });  
  $('#search').click(function() {
    var query = $('input[name="query"]').val();
    var searchResults = $('.search-results');
    var list;
    SC.get('/users', {q: query, license: 'cc-by-sa'}, function(users) {
      console.log(users);
      list = '<ul>';
      users.forEach(function(user) {
        list += '<li class="user" data-user-id="'+user.id+'">';
        list += user.full_name;
        list += '</li>';
      });
      list += "</ul>";
      searchResults.append(list);
    })
  });
});