# Build App
FROM node:23 AS builder
ENV PUBLIC_URL=/nfl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Verificar se o build foi gerado
RUN ls -la /app/build

# Build Image
FROM nginx:latest
ENV JAVARI_BACK_URL=http://local.darioteodoro.dev.br:8180
COPY --from=builder /app/build /usr/share/nginx/html/nfl
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]