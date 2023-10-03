const blobs = document.querySelectorAll(".blob");

let last = 0;
let changeSpeed = 1500;
let rAF;

function render(now) {
  if (!last || now - last >= changeSpeed) {
    last = now;
    blobs.forEach(blob => {
      blob.style.borderTopLeftRadius = `${random()}px ${random()}px`;
      blob.style.borderTopRightRadius = `${random()}px ${random()}px`;
      blob.style.borderBottomLeftRadius = `${random()}px ${random()}px`;
      blob.style.borderBottomRightRadius = `${random()}px ${random()}px`;
    });
  }
  rAF = requestAnimationFrame(render);
}

const random = () => {
  return Math.floor((Math.random() * 1000000));
};

render(last);
