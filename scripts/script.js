function prevImage(galleryId) {
    const gallery = document.querySelector(`#${galleryId} .gallery`);
    const totalImages = gallery.children.length;
    const currentTransform = getComputedStyle(gallery).transform;
    const currentTranslateX = currentTransform.includes('matrix') 
        ? parseFloat(currentTransform.split(',')[4]) 
        : 0;
    const imageWidth = gallery.clientWidth;
    const newTranslateX = Math.min(0, currentTranslateX + imageWidth);
    gallery.style.transform = `translateX(${newTranslateX}px)`;
}

function nextImage(galleryId) {
    const gallery = document.querySelector(`#${galleryId} .gallery`);
    const totalImages = gallery.children.length;
    const currentTransform = getComputedStyle(gallery).transform;
    const currentTranslateX = currentTransform.includes('matrix') 
        ? parseFloat(currentTransform.split(',')[4]) 
        : 0;
    const imageWidth = gallery.clientWidth;
    const maxTranslateX = -(imageWidth * (totalImages - 1));
    const newTranslateX = Math.max(maxTranslateX, currentTranslateX - imageWidth);
    gallery.style.transform = `translateX(${newTranslateX}px)`;
}

