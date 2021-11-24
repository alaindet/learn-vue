FROM composer:2.1

RUN apk add shadow && \
    usermod -u 1000 www-data && groupmod -g 1000 www-data

# RUN addgroup -g 1000 laravel && \
#     adduser -G laravel -g laravel -s /bin/sh -D laravel

USER root

WORKDIR /var/www/html

ENTRYPOINT [ "composer", "--ignore-platform-reqs" ]
