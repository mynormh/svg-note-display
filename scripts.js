const displays = document.querySelectorAll('.note-display');
const transitionDuration = 900;

displays.forEach(display => {
  let note = parseFloat(display.dataset.note);
  let [int, dec] = display.dataset.note.split('.');
  [int, dec] = [Number(int), Number(dec)];

  strokeTransition(display, note);

  increaseNumber(display, int, 'int');
  increaseNumber(display, dec, 'dec');
});

function strokeTransition(display, note) {
  let progress = display.querySelector('.circle__progress--fill');
  let radius = progress.r.baseVal.value;
  let circumference = 2 * Math.PI * radius;
  let offset = (circumference * (10 - note)) / 10;

  progress.style.setProperty('--transitionDuration', `${transitionDuration}ms`);
  progress.style.setProperty('--initialStroke', circumference);

  setTimeout(() => (progress.style.strokeDashoffset = offset), 100);
}

function increaseNumber(display, number, calssName) {
  let element = display.querySelector(`.percent__${calssName}`);
  let decPoint = calssName === 'int' ? '.' : '';
  let interval = transitionDuration / number;
  let counter = 0;

  let increaseInterval = setInterval(() => {
    if (counter === number) {
      window.clearInterval(increaseInterval);
    }
    element.textContent = counter + decPoint;
    counter++;
  }, interval);
}
