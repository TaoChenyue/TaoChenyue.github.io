# pnpm run docs:build
FROM nginx
LABEL Author="taochenyue"
COPY blog/.vuepress/dist /usr/share/nginx/html