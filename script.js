const listItems = document.querySelectorAll('.topics li');
const image = document.getElementById('topic-image');

listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const newImage = item.getAttribute('data-image');
    image.src = newImage;
  });
});