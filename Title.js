  
var audio = new Audio("audio/TitleBGM.mp3");

var fly = new Audio("audio/flyin.mp3");

var blast = new Audio("audio/blast.mp3");

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

function playMusic() {
  audio.play();
  audio.volume = 0.2;
  audio.currentTime=0;
}

function flyin() {
	setTimeout(function() {
	fly.volume = 0.2;
	fly.play();
}, 4500);

	setTimeout(function() {
	blast.volume = 0.2;
	blast.play();
}, 4950);
}

function muteMusic() {
  audio.volume = 0.0;
}

function unmuteMusic() {
  audio.volume = 0.2;
}

var un_mute = document.getElementById('un-mute');

un_mute.onclick = function() {
    alert('toggle player here');
};