const img = [1, 2, 3, 4];
const btn = document.querySelectorAll('button');
const container = document.getElementById('slider');

let index = 0;

btn.forEach(button => {
  button.addEventListener('click', (e) => {

    if (e.target.closest('.arrow-left')) {
      index--;
      if (index < 0) {
        index = img.length - 1;
      }
    }

    if (e.target.closest('.arrow-right')) {
      index++;
      if (index === img.length) {
        index = 0;
      }
    }

    // ✅ update image AFTER index changes
    container.style.background = 
      `url('Image Slider/images/${img[index]}.jpg') center/cover no-repeat`;
  });
});


