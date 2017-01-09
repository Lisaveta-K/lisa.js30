var audio;
var key;

function playSound(e){
  if(!audio) return; 
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e){
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(key => key.addEventListener('click', function(e) {
  audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
  key = document.querySelector(`.key[data-key="${this.dataset.key}"]`);
  playSound(this);
  key.classList.add('playing');
}));

window.addEventListener('keydown', function(e){
  audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  playSound(e);
  key.classList.add('playing');
});