FROM php:7.4-apache

RUN a2enmod rewrite

USER root

RUN apt-get update && apt-get install -y \
        zlib1g-dev \
        libicu-dev \
        libxml2-dev \
        libpq-dev \
        libzip-dev \
        && docker-php-ext-install pdo pdo_mysql zip intl xmlrpc soap opcache \
        && docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd

# RUN npm install -g npm@latest \
#   && rm -r ~/.npm
COPY  docker/php.ini /usr/local/etc/php/php.ini
# Add Composer
COPY --from=composer /usr/bin/composer /usr/bin/composer
#COPY  docker/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY  docker/000-default.conf /etc/apache2/sites-available/000-default.conf

#COPY  deploy/docker/.env-pro /var/www/html/.env

# Suppress the do-not-run-as-root warning from composer
ENV COMPOSER_ALLOW_SUPERUSER 1

COPY  . /var/www/html/
WORKDIR /var/www/html/



RUN chown -R www-data:www-data /var/www/html \
    && composer update \
    && composer install \
    && php artisan config:cache \
    && php artisan key:generate 
#CMD service apache2 start