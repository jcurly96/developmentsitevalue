(function () {
  var bubble = document.querySelector('.logo-speech-bubble, .climber-bubble');
  var text = document.querySelector('.logo-speech-text, .climber-bubble-text');
  if (!bubble || !text) return;

  var messages = [
    'Curious what your property is worth?',
    'Is your property a development site?'
  ];
  var i = 0;

  bubble.addEventListener('animationiteration', function () {
    i = (i + 1) % messages.length;
    text.textContent = messages[i];
  });
})();
