import { galleryItems } from './gallery-items.js';
// Change code below this line
				
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', pickUp);
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

function createMarkup(arr) {
    return arr
        .map(
            ({ preview, original, description }) =>
        `<li class = "gallery_list">
  <a class = "gallery_link" href = "${original}">
    <img class = "gallery_img" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
</li>`,)
        .join('');
}

function pickUp(evt) {

    evt.preventDefault();

    if (evt.target === evt.currentTarget) {
        return
    }



    const currentLink = evt.target.closest('.gallery_link');
    const instance = basicLightbox.create(
        `<img src="${currentLink.href}" width="500" height="500">`,
        {
            onShow: () => document.addEventListener('keydown', closeModalWindow),
            onClose: () => document.removeEventListener('keydown', closeModalWindow)
        })
    
    instance.show();

    function closeModalWindow(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
}
console.log(galleryItems);
