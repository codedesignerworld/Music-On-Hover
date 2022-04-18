$(document).ready(function(){

    var image = document.getElementById('image');

    var music = document.getElementById('music');

    music.currentPosition = 2;

    image.addEventListener('mouseover', function() {
        music.play();
    }, false);

    image.addEventListener('mouseleave', function() {
        music.pause();
    }, false);    
});
