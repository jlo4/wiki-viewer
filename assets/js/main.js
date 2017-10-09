

function getter(res) {
  $('.title').remove();
  $('.desc').remove();
  $('.link').remove();
  var GetterObj = {
    titles: [],
    desc: [],
    links: []
  }
  for (var i = 0; i < res.data[1].length; i++) {
        GetterObj.titles.push(res.data[1][i]);
    }
  for (var i = 0; i < res.data[2].length; i++) {
        GetterObj.desc.push(res.data[2][i]);
    }
  for (var i = 0; i < res.data[3].length; i++) {
        GetterObj.links.push(res.data[3][i]);
    }
  GetterObj.titles.forEach(function(el) {
      $('#titlesHere').append('<li class="title">' + el + '</li>');
    })
  GetterObj.desc.forEach(function(el) {
      $('#descHere').append('<li class="desc">' + el + '</li>');
    })
  GetterObj.links.forEach(function(el) {
      $('#text').append('<a class="link">' + el + '</a>');
    })
}

$(document).ready(function() {
  $('#get').on('click', function() {
    var $in = $('#search').val();
    var url = 'https://en.wikipedia.org//w/api.php?origin=*&action=opensearch&search='+ $in + '&formatversion=latest';
    axios.get(url)
    .then(function(res){
      getter(res);
    })
    .catch(function(){
      alert(url);
    })
    $('#search').val('');
  })
  $('#search').on('keyup', function(e) {
    var $in = $('#search').val();
    if ($in != '' && e.which == 13) {
      var url = 'https://en.wikipedia.org//w/api.php?origin=*&action=opensearch&search='+ $in + '&formatversion=latest';
      axios.get(url)
      .then(function(res){
        getter(res);
      })
      .catch(function(){
        alert(url);
      })
      $('#search').val('');
    }
  })

    $('#random').on('click', function() {
    var $in = $('#search').val();
    var url = 'https://en.wikipedia.org//w/api.php?origin=*&action=opensearch&search='+ $in + '&formatversion=latest';
    axios.get(url)
    .then(function(res){
      for (var i = 0; i < res.data[3].length; i++) {
        $('#text').html(res.data[3][i] + '\n');
      }
    })
    .catch(function(){
      alert(url);
    })
  })
});
