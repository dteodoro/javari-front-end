# Build App
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Build Image
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
