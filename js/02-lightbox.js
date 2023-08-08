import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const gallery = document.querySelector('.gallery');
const images = galleryItems.map(
            ({ preview, original, description }) =>
        `<li class = "gallery_list">
  <a class = "gallery_link" href = "${original}">
    <img class = "gallery_img" src="${preview}" alt="${description}"/>
  </a>
</li>`,)
    .join('');
gallery.insertAdjacentHTML('beforeend', images);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 300,
});


console.log(galleryItems);
