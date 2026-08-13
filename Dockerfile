FROM node:24-alpine AS base

# Update npm to a version with fixed bundled dependencies
RUN npm install -g npm@12.0.2


FROM base AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci


FROM base AS builder

WORKDIR /app

ARG NEXT_PUBLIC_PRODUCT_API
ENV NEXT_PUBLIC_PRODUCT_API=$NEXT_PUBLIC_PRODUCT_API

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]