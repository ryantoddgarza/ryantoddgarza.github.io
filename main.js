const animate = {
  message: '503 - be right back',
  interval: 180,
  typeMessage() {
    const messageEl = document.getElementById('message');
    [...this.message].forEach((char, i) => {
      setTimeout(() => {
        messageEl.innerHTML += char;
      }, i * this.interval);
    });
  },
  showSocial() {
    socialEl = document.getElementById('socialRow');
    socialEl.style.opacity = '1';
  },
};

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function init() {
  await wait(1750);
  animate.typeMessage();
  await wait(animate.interval * animate.message.length);
  animate.showSocial();
}

window.onload = init;
