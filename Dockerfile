# Package install Layer
FROM node:14-slim as node_modules

WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock ./

RUN yarn install --non-interactive --frozen-lockfile --prod

#==================================================
# Run Layer
# FROM gcr.io/distroless/nodejs:14
FROM node:14-slim

WORKDIR /app

ENV NODE_ENV=production

COPY --from=node_modules /app/node_modules /app/node_modules
COPY .env tsconfig.json package.json /app/
COPY src/ /app/src/
COPY public/ /app/public/

CMD ["yarn", "start"]