setTimeout(typeMessage = () => {
  const messageEl = document.querySelector('.message');
  const messageString = '503 - be right back';

  [...messageString].map((char, i) => {
    setTimeout(() => {
      messageEl.innerHTML += char;
    }, i * 180);
  });
}, 1250);

setTimeout(showSocial = () => {
  document.querySelector('.social-icon-row').style.opacity = '1';
}, 4000);

