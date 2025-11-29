FROM node:20-alpine

WORKDIR /app

COPY . ./

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm install

EXPOSE 8080

CMD ["node", "main.js"]
