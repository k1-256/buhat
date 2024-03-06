const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const body = document.body;

noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.top = `${y}px`;
  noButton.style.left = `${x}px`;
});

yesButton.addEventListener('click', () => {
  body.style.backgroundImage = "url('https://i.pinimg.com/originals/40/4a/3e/404a3e2430b4739a3132f651d564af2e.gif')";
  title.textContent = 'Прекрасно!';
  createFireworks();
});

function createFireworks() {
  for (let i = 0; i < 50; i++) {
    const firework = document.createElement('img');
    firework.src = 'https://sc04.alicdn.com/kf/HLB1xP.RTzTpK1RjSZKPq6y3UpXaY.jpg_50x50.jpg';
    firework.className = 'firework';
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = `${Math.random() * window.innerHeight}px`;
    firework.style.transform = `rotate(${Math.random() * 360}deg)`;
    body.appendChild(firework);
  }
}
