
// ÉCOLE TECHNIQUE CHRIST ROI - SCRIPT COMMUN

// Année dynamique dans le pied de page
document.addEventListener('DOMContentLoaded', function() {
  // Hero background carousel
  initHeroCarousel();
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Menu mobile
  const menuToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    // Ouverture / fermeture du menu au clic sur le bouton hamburger
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });

    // Fermeture automatique du menu quand on clique sur un lien de navigation
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.classList.remove('open');
      });
    });
  }

  // Bouton retour en haut
  initScrollToTop();

  // Animations au scroll
  initScrollAnimations();

  // Validation du formulaire de contact (si présent)
  initContactForm();
});

// HERO BACKGROUND CAROUSEL
function initHeroCarousel() {
  const heroImages = document.querySelectorAll('.hero-bg-image');
  if (heroImages.length === 0) return;

  // Attendre que toutes les images soient chargées
  let imagesLoaded = 0;
  const totalImages = heroImages.length;

  function checkAllImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      startCarousel();
    }
  }

  // Vérifier si les images sont déjà chargées
  heroImages.forEach((img) => {
    if (img.complete) {
      checkAllImagesLoaded();
    } else {
      img.addEventListener('load', checkAllImagesLoaded);
      img.addEventListener('error', checkAllImagesLoaded); // Continuer même si une image échoue
    }
  });

  // Si toutes les images sont déjà chargées
  if (imagesLoaded === totalImages) {
    startCarousel();
  }

  function startCarousel() {
    let currentIndex = 0;

    function showNextImage() {
      // Retirer la classe active de l'image actuelle
      heroImages[currentIndex].classList.remove('active');
      
      // Passer à l'image suivante
      currentIndex = (currentIndex + 1) % heroImages.length;
      
      // Ajouter la classe active à la nouvelle image
      heroImages[currentIndex].classList.add('active');
    }

    // Changer l'image toutes les 3 secondes
    setInterval(showNextImage, 3000);
  }
}
// BOUTON RETOUR EN HAUT

function initScrollToTop() {
  // Créer le bouton
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.setAttribute('aria-label', 'Retour en haut');
  scrollBtn.innerHTML = '↑';
  document.body.appendChild(scrollBtn);

  // Afficher/masquer le bouton selon le scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  // Action du bouton
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


// ANIMATIONS AU SCROLL

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, observerOptions);

  // Observer les éléments à animer
  const elementsToAnimate = document.querySelectorAll(
    '.card, .section-detail, .admission-section, .gallery-item, .contact-info, .contact-form'
  );

  elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}


// VALIDATION FORMULAIRE DE CONTACT

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Réinitialiser les erreurs
    const formGroups = contactForm.querySelectorAll('.form-group');
    formGroups.forEach(group => {
      group.classList.remove('error');
    });
    if (formSuccess) {
      formSuccess.classList.remove('show');
    }

    let isValid = true;

    // Validation du nom
    const nom = document.getElementById('nom');
    if (nom && !nom.value.trim()) {
      nom.closest('.form-group').classList.add('error');
      isValid = false;
    }

    // Validation de l'email
    const email = document.getElementById('email');
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.closest('.form-group').classList.add('error');
        isValid = false;
      }
    }

    // Validation du sujet
    const sujet = document.getElementById('sujet');
    if (sujet && !sujet.value) {
      sujet.closest('.form-group').classList.add('error');
      isValid = false;
    }

    // Validation du message
    const message = document.getElementById('message');
    if (message && !message.value.trim()) {
      message.closest('.form-group').classList.add('error');
      isValid = false;
    }

    if (isValid) {
      // Afficher le message de succès
      if (formSuccess) {
        formSuccess.classList.add('show');
      }
      contactForm.reset();
      
      // Faire défiler vers le haut du formulaire
      if (formSuccess) {
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      
      // Masquer le message après 5 secondes
      setTimeout(() => {
        if (formSuccess) {
          formSuccess.classList.remove('show');
        }
      }, 5000);
    } else {
      // Faire défiler vers la première erreur
      const firstError = contactForm.querySelector('.form-group.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });

  // Validation en temps réel
  const inputs = contactForm.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      const formGroup = this.closest('.form-group');
      if (this.hasAttribute('required')) {
        if (this.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!this.value.trim() || !emailRegex.test(this.value)) {
            formGroup.classList.add('error');
          } else {
            formGroup.classList.remove('error');
          }
        } else if (this.tagName === 'SELECT') {
          if (!this.value) {
            formGroup.classList.add('error');
          } else {
            formGroup.classList.remove('error');
          }
        } else {
          if (!this.value.trim()) {
            formGroup.classList.add('error');
          } else {
            formGroup.classList.remove('error');
          }
        }
      }
    });
  });
}

