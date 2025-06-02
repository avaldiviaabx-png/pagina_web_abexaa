FROM node:16 as builder

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todos los archivos del proyecto al contenedor
COPY . .

# Construir la aplicación con Vite
RUN npm run build

# Crear una imagen ligera para servir la aplicación
FROM node:16-alpine

# Crear un directorio para los archivos estáticos
WORKDIR /app

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /usr/src/app/dist /app

# Instalar un servidor HTTP ligero
RUN npm install -g serve

# Exponer el puerto en el que se servirá la aplicación
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["serve", "-s", "/app", "-l", "3000"]
