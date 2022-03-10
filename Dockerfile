FROM node:16 as dep
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:16 as builder
WORKDIR /app
COPY . .
COPY --from=dep /app/node_modules ./node_modules
RUN npm run build

FROM node:16 as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]