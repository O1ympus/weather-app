FROM node:20-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

RUN addgroup -S app && adduser -S app -G app
RUN apk add --no-cache postgresql-client bash

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY wait-for-postgres.sh /wait-for-postgres.sh

RUN chmod +x /wait-for-postgres.sh && chown -R app:app /usr/src/app /wait-for-postgres.sh

USER app
EXPOSE 3000

ENTRYPOINT ["sh", "/wait-for-postgres.sh"]
CMD ["npm", "run", "start:prod"]
