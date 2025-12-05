# Site Web - École Secondaire Technique CHRIST ROI

## 📋 Description

Site web moderne et responsive pour l'École Secondaire Technique CHRIST ROI, présentant l'établissement, ses sections techniques, services et facilitant la communication avec les élèves, parents et visiteurs.

## 🎯 Fonctionnalités

- ✅ Site responsive (PC, smartphone, tablette)
- ✅ Menu de navigation horizontal avec version mobile
- ✅ 6 pages principales : Accueil, À propos, Sections, Galerie, Admission, Contact
- ✅ Formulaire de contact avec validation JavaScript
- ✅ Carte Google Maps intégrée
- ✅ Effets hover et transitions CSS
- ✅ Optimisation SEO basique
- ✅ Design moderne avec charte graphique professionnelle

## 🎨 Charte graphique

- **Couleur principale** : Bleu marine `#003366`
- **Couleur accent** : Doré `#D9A404`
- **Couleur secondaire** : Blanc `#FFFFFF`
- **Polices** : Montserrat (titres), Roboto (texte), Arial (fallback)

## 📁 Structure du projet

```
christ-roi/
│── index.html              # Page d'accueil
│── apropos.html            # À propos (historique, mission, vision, valeurs)
│── sections.html           # Sections techniques (5 sections)
│── galerie.html            # Galerie photo
│── admission.html          # Informations d'admission
│── contact.html            # Formulaire de contact et coordonnées
│── style.css               # Fichier CSS principal
│── script.js               # Script JavaScript commun
│── gallery.js              # Script pour la galerie lightbox
│── images/                 # Dossier pour les images
│── README.md               # Documentation principale
└── GUIDE_PERSONNALISATION.md # Guide de personnalisation détaillé
```

## 🚀 Installation et utilisation

### Prérequis

Aucun prérequis particulier. Le site fonctionne avec un simple navigateur web moderne.

### Démarrage

1. **Télécharger les fichiers**
   - Téléchargez tous les fichiers du projet dans un même dossier

2. **Ouvrir le site**
   - Ouvrez le fichier `index.html` dans votre navigateur web
   - Ou utilisez un serveur local (recommandé pour de meilleures performances)

3. **Serveur local (optionnel)**
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   
   # Avec PHP
   php -S localhost:8000
   ```
   Puis accédez à `http://localhost:8000` dans votre navigateur

## 📄 Pages du site

### 1. Accueil (`index.html`)
- Nom de l'école et slogan
- Bannière hero avec description
- Présentation des 5 sections techniques
- Boutons CTA vers les sections et admissions

### 2. À propos (`apropos.html`)
- Historique de l'école
- Mission
- Vision
- Valeurs

### 3. Sections (`sections.html`)
- **Électricité** : Installation, maintenance, sécurité électrique
- **Informatique** : Programmation, réseaux, maintenance
- **Mécanique** : Maintenance, montage, réparation
- **Construction** : Dessin, maçonnerie, structures
- **Comptabilité** : Gestion comptable, finances

Chaque section inclut :
- Description
- Compétences développées
- Débouchés professionnels

### 4. Galerie (`galerie.html`)
- Structure prête pour afficher des photos
- Placeholders pour : laboratoires, salles, événements, activités

### 5. Admission (`admission.html`)
- Conditions d'inscription
- Documents nécessaires
- Informations pratiques (horaires, frais, bourses)
- Processus de sélection

### 6. Contact (`contact.html`)
- Coordonnées de l'école
- Horaires d'ouverture
- Carte Google Maps (à mettre à jour avec l'adresse réelle)
- Formulaire de contact avec validation

## ✨ Nouvelles fonctionnalités

- ✅ **Bouton retour en haut** : Apparaît automatiquement lors du scroll
- ✅ **Animations au scroll** : Effets de fade-in sur les éléments
- ✅ **Lightbox pour la galerie** : Cliquez sur une image pour l'agrandir
- ✅ **Menu mobile amélioré** : Fermeture automatique au clic extérieur
- ✅ **Script JavaScript commun** : Code optimisé et réutilisable
- ✅ **Navigation clavier** : Support des touches flèches dans la galerie

## 🔧 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `style.css` :
```css
:root {
  --color-primary: #003366;    /* Bleu marine */
  --color-accent: #D9A404;     /* Doré */
  --color-white: #FFFFFF;      /* Blanc */
}
```

### Ajouter des images

1. Placez vos images dans le dossier `images/`
2. Modifiez les balises `<img>` dans les fichiers HTML
3. Pour la galerie, remplacez les placeholders par de vraies images

### Mettre à jour la carte Google Maps

Dans `contact.html`, remplacez l'URL de l'iframe par celle de votre établissement :
1. Allez sur Google Maps
2. Recherchez l'adresse de l'école
3. Cliquez sur "Partager" > "Intégrer une carte"
4. Copiez le code iframe et remplacez celui dans `contact.html`

### Modifier les informations de contact

Éditez la section "Informations de contact" dans `contact.html` :
- Adresse
- Téléphone
- Email

## 🌐 Compatibilité

- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Edge (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Navigateurs mobiles (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

Le site s'adapte automatiquement à :
- **Desktop** : Largeur > 768px
- **Tablette** : Largeur 481px - 768px
- **Mobile** : Largeur ≤ 480px

## 🔍 SEO

Le site inclut :
- Balises meta description sur chaque page
- Structure HTML5 sémantique
- Titres hiérarchiques (h1, h2, h3)
- Attributs alt pour les images (à compléter)

## 📝 Notes importantes

- Le formulaire de contact utilise une validation JavaScript côté client uniquement
- Pour un fonctionnement complet, il faudra intégrer un backend (PHP, Node.js, etc.)
- La carte Google Maps utilise un exemple - remplacez par l'adresse réelle
- Les images de la galerie sont des placeholders - ajoutez vos propres photos

## 👥 Public cible

- Parents d'élèves
- Élèves potentiels
- Nouveaux inscrits
- Enseignants
- Partenaires scolaires et techniques

## 📞 Support

Pour toute question ou assistance, contactez l'équipe de développement.

---

**© 2025 École Secondaire Technique CHRIST ROI**

*Site pédagogique réalisé dans le cadre d'un projet scolaire.*

