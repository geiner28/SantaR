const rainContainer = document.querySelector('.rain-container');
const numDrops = 100;

for (let i = 0; i < numDrops; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  drop.style.left = `${Math.random() * 100}vw`;
  drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
  drop.style.animationDelay = `${Math.random() * 2}s`; // más corto para mejor efecto

  rainContainer.appendChild(drop);
}