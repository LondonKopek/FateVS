var slideIndex = 0;
var snd = new Audio("audio/sheath.wav");
var audio = new Audio("audio/BlazingAshes.mp3");
showSlides(slideIndex);


function plusSlides(n) {
  snd.play();
  snd.currentTime=0;
  showSlides(slideIndex += n);
}

function playMusic() {
  audio.play();
  audio.volume = 0.2;
  audio.currentTime=0;
}

function muteMusic() {
  audio.volume = 0.0;
}

function unmuteMusic() {
  audio.volume = 0.2;
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function diffImage(img) 
{
   if(img.src.match(/sound/)) img.src = "projectfiles/mute.png";
   else img.src = "projectfiles/sound.png";
}

function muteUnmute(audio)
{
   if(audio.volume.match(/0.2/)) audio.volume = 0.0;
   else audio.volume = 0.2;
}

var un_mute = document.getElementById('un-mute');

un_mute.onclick = function() {
    alert('toggle player here');
};
