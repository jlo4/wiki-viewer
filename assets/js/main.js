

function getter(res) {
  $('.title').remove();
  $('.desc').remove();
  $('.link').remove();
  var Getter = {
    titles: [],
    desc: [],
    links: []
  }
  for (var i = 0; i < res.data[1].length; i++) {
        Getter.titles.push(res.data[1][i]);
    }
  for (var i = 0; i < res.data[2].length; i++) {
        Getter.desc.push(res.data[2][i]);
    }
  for (var i = 0; i < res.data[3].length; i++) {
        Getter.links.push(res.data[3][i]);
    }
  Getter.titles.forEach(function(el) {
      $('#titlesHere').append('<li class="title">' + el + '</li>');
    })
  Getter.desc.forEach(function(el) {
      $('#descHere').append('<li class="desc">' + el + '</li>');
    })
  Getter.links.forEach(function(el) {
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
