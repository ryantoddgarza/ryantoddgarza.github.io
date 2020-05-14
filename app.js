(function cursorBlink() {
  setInterval (function() {
    document.querySelector('.cursor').classList.toggle('hidden');
  }, 500);
})();

setTimeout(function typeMessage() {
  let domMessage = document.querySelector('.message');
  let messageString = 'be right back';
  let messageContent = messageString.split('');
  let messageOutput = [];

  for (let i = 0; i < messageContent.length; i++) {
    task(i);
    function task(i) {
      setTimeout (function() {
        messageOutput.push(messageContent[i]);
        domMessage.textContent = messageOutput.join('');
      }, 200 * i);
    }
  }

  document.addEventListener('keydown', function(event) {
    let key = event.key;

    switch (key) {
      case 'Backspace':
        messageOutput.pop();
        break;

      case 'Shift':
      case 'Meta':
      case 'Alt':
      case 'Control':
      case 'Escape':
      case 'Tab':
      case 'CapsLock':
      case 'Enter':
        // Ignore modifier keys
        break;

      default:
          messageOutput.push(key);
        break;
    }
    domMessage.textContent = messageOutput.join('');
  })

}, 1250);

setTimeout(function showSocial() {
  document.querySelector('.social').style.opacity = '1';
}, 4000);

setTimeout(function showKeyboard() {
  const icon = document.querySelector('.keyboard-container');
  icon.style.opacity = '1';
}, 8000);

function hideKeyboardIcon() {
  document.querySelector('.keyboard-container').classList.add('keyboard-open');
}

document.querySelector('.keyboard-container').addEventListener('click', function() {
  hideKeyboardIcon();
})
