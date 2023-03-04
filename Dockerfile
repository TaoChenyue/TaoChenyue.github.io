# pnpm run docs:build
FROM nginx
LABEL Author="taochenyue"
COPY src/.vuepress/dist /usr/share/nginx/html