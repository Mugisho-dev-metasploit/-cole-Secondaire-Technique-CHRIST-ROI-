
// GALLERY LIGHTBOX FUNCTIONALITY

document.addEventListener('DOMContentLoaded', function() {
  initGalleryLightbox();
});

function initGalleryLightbox() {
  // Créer le conteneur lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Fermer">×</button>
    <button class="lightbox-prev" aria-label="Image précédente">‹</button>
    <button class="lightbox-next" aria-label="Image suivante">›</button>
    <div class="lightbox-content">
      <img src="" alt="" />
    </div>
  `;
  document.body.appendChild(lightbox);

  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;
  const images = [];

  // Collecter toutes les images de la galerie
  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    if (img) {
      images.push({
        src: img.src,
        alt: img.alt || `Image ${index + 1}`
      });
      
      // Ajouter un événement de clic
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        openLightbox(index);
      });
    } else {
      // Pour les placeholders, on peut aussi permettre le clic
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        // Afficher un message ou ouvrir une version agrandie du placeholder
        alert('Cette image sera disponible prochainement. Ajoutez vos photos dans le dossier images/ et mettez à jour la galerie.');
      });
    }
  });

  function openLightbox(index) {
    if (images.length === 0) return;
    
    currentIndex = index;
    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Réactiver le scroll
  }

  function nextImage() {
    if (images.length === 0) return;
    currentIndex = (currentIndex + 1) % images.length;
    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  function prevImage() {
    if (images.length === 0) return;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  // Événements
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);

  // Fermer avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    }
  });

  // Fermer en cliquant sur le fond
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

