  //GET Json with Track List
  var trackList;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      //document.getElementById("demo").innerHTML = myObj.name;
      trackList = myObj;
    }
  };

// ZIEHT SICH JSON AUS DEM GIT!!!
xmlhttp.open("GET", "https://raw.githubusercontent.com/LyricalDaddy/LyricalDaddy.github.io/master/assets/songs/SongDB.json", true);
xmlhttp.send(); 
