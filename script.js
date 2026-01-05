let width = 0;

function start() {
  width = 0;
  const bar = document.getElementById("bar");

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      bar.style.width = width + "%";
    }
  }, 50);
}
