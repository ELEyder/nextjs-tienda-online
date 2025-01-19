# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código del proyecto al contenedor
COPY . .

# Expone el puerto que usa Next.js (por defecto es 3000)
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
