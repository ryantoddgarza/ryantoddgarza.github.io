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
        console.log(messageOutput);
        domMessage.textContent = messageOutput.join('');
      }, 200 * i);
    }
  }
}, 1250);

(setTimeout(function showSocial() {
  document.querySelector('.social').style.opacity = '1';
}, 4000))();
