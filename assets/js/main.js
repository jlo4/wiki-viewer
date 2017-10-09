function getter(res) {
  $('#allInfoHere').empty();
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
  GetterObj.titles.forEach(function(el, i) {
      $('#allInfoHere').append(`<ul class=list${i}></ul>`);
      $(`.list${i}`).append(`<li class=title${i}>` + el + '</li>');
    })
  GetterObj.desc.forEach(function(el, i) {
      $(`.list${i}`).append(`<li class=desc${i}>` + el + '</li>');
    })
  GetterObj.links.forEach(function(el, i) {
      $(`.list${i}`).append(`<a class=link${i}>` + 'Link' + '</a>');
      $(`.link${i}`).attr('href', el);
    })
}

$(document).ready(function() {
  $('#get').on('click', function() {
    var $in = $('#search').val();
    var url = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='+ $in + '&formatversion=latest';
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
      var url = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='+ $in + '&formatversion=latest';
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
});
