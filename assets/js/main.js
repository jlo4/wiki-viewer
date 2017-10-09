var Getter = {
  arr: []
}

function getter(res) {
  $('.list').remove();
  Getter.arr = [];
  for (var i = 0; i < res.data[3].length; i++) {
        Getter.arr.push(res.data[3][i]);
    }
  Getter.arr.forEach(function(el) {
      $('#text').append('<li class="list">' + el + '</li>');
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
