FROM nginx:1.20-alpine
LABEL Wanderson Vieira <wandersonvieiralves-92@hotmail.com>

RUN rm /etc/nginx/conf.d/default.conf
COPY node.conf /etc/nginx/conf.d
RUN mkdir /var/www/public -p && touch /var/www/public/index.php

ARG VERSION=1.0