function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function fetchComics () {
  var comics = [
      "https://imgs.xkcd.com/comics/equations.png",
      "https://imgs.xkcd.com/comics/home_organization.png",
      "https://imgs.xkcd.com/comics/scrabble.png",
      "https://imgs.xkcd.com/comics/trade_expert.png"
  ];
  var comicsList = document.getElementById('comicsList');

  comicsList.innerHTML = '';

  for (var i = 0; i < comics.length; i++) {
    var url = comics[i];

    comicsList.innerHTML +=
        '<div class="row">' +
        '<div class="col-md-4">' +
        '<a href="' + url + '">'+
        '<img src="' + url + '" alt="test" />' +
        '</a>' +
        '</div>' +
        '</div>';
  }

  var tcl = document.getElementById('totalcomicsloaded');

  tcl.innerHTML = 'Total comics loaded ' + comics.length;

  var json_obj = JSON.parse(Get("https://xkcd.com/info.0.json"));
  alert("test");
}
