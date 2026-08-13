FROM node:20-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci


FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN apk upgrade --no-cache

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm uninstall -g npm

EXPOSE 5000

CMD ["node", "app.js"]