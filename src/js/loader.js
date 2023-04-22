window.addEventListener('load', () => {
  const spinner = document.querySelector('.loader');

  spinner.classList.add('loader-hidden');

  spinner.addEventListener('transitioned', () => {
    document.body.removeChild('loader');
  });
});

const loader = document.querySelector('.loader');

const startSpin = () => {
  loader.style.display = 'flex';
};

const stopSpin = () => {
  loader.style.display = 'none';
};

export const circle = { loader, startSpin, stopSpin };
