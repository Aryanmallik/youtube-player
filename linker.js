
document.getElementById("userinput").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
event.preventDefault(); 
var userInput = document.getElementById("userinput").value;
searchYouTube(userInput);

}
});


document.getElementById("textform").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var userInput = document.getElementById("userinput").value;
    searchYouTube(userInput);
});

function searchYouTube(query) {
    var apiKey = 'AIzaSyAxSgN0vhSDcAte5xme4InVsUIVeONf_wM'; 
    var maxResults = 1;

    var apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&maxResults=${maxResults}&part=snippet`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data.items);
        })
        .catch(error => console.error(error));
}

function displayResults(videos) {
    videos.forEach(video => {
        sendlink= `https://www.youtube.com/watch?v=${video.id.videoId}`;
        sendlink.textContent = video.snippet.title;

        var destinationPage = "page2.html";
        var args1 = {  link1: sendlink,};
        var queryString1 = Object.keys(args1).map(key => key + "=" + args1[key]).join("&");
        var url1 = destinationPage + "?" + queryString1;
        window.location.href = url1;
 
    });

}
 

