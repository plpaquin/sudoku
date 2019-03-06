FROM nginx:alpine

COPY ./build /usr/share/nginx/html
COPY ./docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
