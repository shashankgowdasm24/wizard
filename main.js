const wizard = document.getElementById("wizard");
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  const mousePosition = {
    x: event.clientX - (wizard.offsetLeft + wizard.offsetWidth) / 2,
    y: event.clientY - (wizard.offsetTop + wizard.offsetHeight) / 2,
  };

  const angle = (Math.atan2(mousePosition.y, mousePosition.x) * 180) / Math.PI;

  const initialOrientation = 180;

  wizard.style.transform = `rotate(${angle + initialOrientation}deg)`;

  wizard.style.left = `${event.clientX - wizard.offsetWidth / 2}px`;
  wizard.style.top = `${event.clientY - wizard.offsetHeight / 2}px`;
});
