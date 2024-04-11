FROM ubuntu
RUN apt update -y
RUN apt install apache2 -y
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
COPY ./out/ /var/www/html/
EXPOSE 80