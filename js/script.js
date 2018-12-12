/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Africa",
    "Never Gonna Give You Up",
    "Ocean Man",
    "We Are Number 1", 
    "What Are You Doing In My Swamp",
    "Bohemian Rhapsody",
    "Sandstorm",
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

var images_links = ["https://www.youtube.com/watch?v=FTQbiNvZqaY",
"https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
"https://www.youtube.com/watch?v=6E5m_XtCX3c",
"https://www.youtube.com/watch?v=PfYnvDL0Qcw",
"https://www.youtube.com/watch?v=VVggXZPCuYw&t=49s",
"https://www.youtube.com/watch?v=jFKBR1ggTMY",
"https://www.youtube.com/watch?v=gFsdPrBLHO0",]

var artists = ["Toto", 
"Rick Astley",
"Ween",
"Lazy Town",
"Shrek",
"Queen",
"Darude"]

var song_lengths = ["4:35", "3:32", "2:07", "2:50", "1:50", "6:02", "3:49"]


function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
