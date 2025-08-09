# ---------------------
# Étape 1 : Build Vite
# ---------------------
FROM node:20-alpine AS builder

# Répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY src/vue-cv/package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste du code
COPY src/vue-cv/ ./

# Build pour production
RUN npm run build


# ---------------------
# Étape 2 : Serveur Nginx
# ---------------------
FROM nginx:stable-alpine

# Supprimer la config par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier le build de l'étape précédente
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier une config Nginx optimisée pour SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
