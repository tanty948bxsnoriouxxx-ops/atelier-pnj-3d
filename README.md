# Atelier PNJ 3D — GitHub Pages

Interface statique en français pour préparer une image et ouvrir le Space officiel TRELLIS.

## Fichiers
- `index.html` : structure de la page.
- `style.css` : design responsive.
- `app.js` : aperçu local de l'image, validation et ouverture de TRELLIS.

## Publier gratuitement avec GitHub Pages
1. Crée un dépôt **public** sur https://github.com/new (par exemple `atelier-pnj-3d`).
2. Ajoute les trois fichiers (`index.html`, `style.css`, `app.js`) et ce `README.md` à la racine du dépôt.
3. Ouvre **Settings → Pages**.
4. Dans **Build and deployment**, choisis **Deploy from a branch**.
5. Choisis la branche `main`, le dossier `/ (root)`, puis clique sur **Save**.
6. Après la publication, GitHub affiche l'URL du site dans la section Pages.

## Utiliser l'atelier
1. Ouvre ton site GitHub Pages.
2. Choisis une image de ton personnage : elle est affichée localement dans la page.
3. Clique sur « Ouvrir TRELLIS pour générer ».
4. Dans le Space officiel, importe à nouveau ton image, lance la génération puis télécharge le GLB quand il est prêt.

## Limites à connaître
- GitHub Pages héberge les fichiers statiques ; il n'exécute pas de modèle IA.
- Le fichier choisi dans cette page n'est pas envoyé automatiquement à Hugging Face. Il faut le sélectionner une deuxième fois dans le Space TRELLIS.
- La génération dépend de la disponibilité, des quotas et des conditions d'accès du Space Hugging Face. Cela peut évoluer.
- Un GLB ne garantit pas un personnage riggé, animé ou prêt à l'emploi dans un moteur de jeu.
- Cette version n'a pas de serveur, pas de clé API et pas de frais d'hébergement côté GitHub Pages.
