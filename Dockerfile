FROM node:20-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci


FROM node:20-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_PRODUCT_API
ENV NEXT_PUBLIC_PRODUCT_API=$NEXT_PUBLIC_PRODUCT_API

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]