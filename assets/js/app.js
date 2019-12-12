var songDIV = document.getElementById("insertSongsHere");
var xmlhttp = new XMLHttpRequest();
var playBTN;
var test = document.querySelector("h1");
var currentSong = document.querySelector("#currentSong");

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

// Wird beim Aufrufen der seite ausgeführt -- verwendet eine Callbackfunction damit auf response des GET requests gewartet wird bevor weiter gearbeitet wird
function startUp() {
  loadTrackList(renderTracks);
}
// Liest die JSON und schreibt sie ins Obj tracklist
function loadTrackList(callback) {
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
// Verwendet das trackList Obj um es auf die Website zu schreiben
// NEEDED AS CALLBACK BECAUSE U NEED TO WAIT UNTIL SHIT LOADS SO YOU CAN WORK ON IT
function renderTracks(response){
  trackList.Tracks.forEach(function(track){
    console.log(track.name);
    // <div id = "trackContainer" class = "col-5"><span id = "play-button"> track.name </div>
    //songDIV.innerHTML += "<div id=" + "trackContainer " + "class="+ "col-5" +">"+ "<span id="+"play-button"+">▶</span>" + track.name +"</div>"
    songDIV.innerHTML += '<div id="trackContainer" class="col-5"><span id="play-button">▶ </span>' + track.name +'</div>'
    
  });
  // Needs to be called here because at this point the HTML is loaded
  addBTNfunctionality()
}

function addBTNfunctionality(){
  playBTN = document.querySelectorAll("#play-button");

  playBTN.forEach(function(btn){
    btn.addEventListener("click",function(){
      // add functionality
    })
  })
}