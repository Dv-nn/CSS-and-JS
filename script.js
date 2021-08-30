let ufo = document.querySelector('body');

ufo.addEventListener('mousemove', (m) => {
   const eyes = document.querySelector('.eye-right');
   const rect = eyes.getBoundingClientRect();
   const eyeX = (rect.left + rect.right) / 2;
   const eyeY = (rect.top + rect.bottom) / 2;
     
   let radianDegrees = - Math.atan2(eyeX - m.pageX, eyeY - m.pageY);
   eyes.style.transform = `rotate(${radianDegrees}rad)`;
});
 
ufo.addEventListener('mousemove', (e) => {
   const eyes = document.querySelector('.eye-left');
   const rect = eyes.getBoundingClientRect();
   const eyeX = (rect.left + rect.right) / 2;
   const eyeY = (rect.top + rect.bottom) / 2;
     
   let radianDegrees = - Math.atan2(eyeX - e.pageX, eyeY - e.pageY);
   eyes.style.transform = `rotate(${radianDegrees}rad)`;
 });
