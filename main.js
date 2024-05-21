document.addEventListener('DOMContentLoaded', () => {
  const wizard = document.getElementById('wizard');
  const container = document.querySelector('.container');

  container.addEventListener('click', (event) => {
      const rect = container.getBoundingClientRect();
      const containerX = rect.left;
      const containerY = rect.top;

      const clickX = event.clientX - containerX;
      const clickY = event.clientY - containerY;

      const wizardX = wizard.offsetLeft + wizard.offsetWidth / 2;
      const wizardY = wizard.offsetTop + wizard.offsetHeight / 2;

      const deltaX = clickX - wizardX;
      const deltaY = clickY - wizardY;

      let angle = Math.atan2(deltaY, deltaX);
      
      let angleDeg = angle * (180 / Math.PI);

      angleDeg = (angleDeg + 360) % 360;
      const isClickLeft = deltaX < 0;

      if (isClickLeft) {
          angleDeg += 180;
      }

      wizard.style.transform = `rotate(${angleDeg}deg) scaleX(${isClickLeft ? -1 : 1})`;
      wizard.style.left = `${clickX - wizard.offsetWidth / 2}px`;
      wizard.style.top = `${clickY - wizard.offsetHeight / 2}px`;
  });
});
