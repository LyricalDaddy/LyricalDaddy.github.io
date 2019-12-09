var songDIV = document.getElementById("insertSongsHere");
var xmlhttp = new XMLHttpRequest();


// Objects have to be created so you can fill them up with info
var Tracks = {
  name: "",
  source: "",
  date: "",
  typeBeat: []
}

var trackList = {
  Tracks: []
}

function loadTrackList(callback) {
  // reads what came from get request und verarbeitet es in dem Fall von JSON 2 tracklist Obj
  // "onReadyStateChange"  is an EventHandler that runs everytime the .readyState changes !
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      trackList = myObj;
      callback(trackList);
    }
  }
  
  // open sets up the request and send() sends it
  xmlhttp.open("GET", "https://raw.githubusercontent.com/LyricalDaddy/LyricalDaddy.github.io/master/assets/songs/SongDB.json", true);
  xmlhttp.send();
}

function renderTracks(response){
  trackList.Tracks.forEach(function(track){
    console.log(track.name);
    songDIV.innerHTML += "<div id=" + "trackContainer " + "class="+ "col" +">"+ track.name +"</div>"
  });
}

function startUp() {
  loadTrackList(renderTracks);
}