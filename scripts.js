const displays = document.querySelectorAll('.note-display');
const transitionDuration = 900;

displays.forEach(display => {
  let note = parseFloat(display.dataset.note);

  strokeTransition(display, note);
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
