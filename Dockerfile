FROM node:18

WORKDIR /app

COPY package*.json .
COPY postcss.config.js .

RUN npm ci

COPY entrypoint.sh .

RUN chmod +x entrypoint.sh

ENV PATH="/app:$PATH"

CMD ["/app/entrypoint.sh"]