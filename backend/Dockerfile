# syntax=docker/dockerfile:1

FROM httpd:2.4

RUN apt update && \
    apt install -y wget && \
    apt install -y python3.9 && \
    apt install -y python3-pip && \
    apt install -y libpq-dev python3-dev && \
    apt install -y apache2-dev && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN wget https://github.com/GrahamDumpleton/mod_wsgi/archive/refs/tags/4.9.0.tar.gz && \
    tar xvfz 4.9.0.tar.gz

WORKDIR /app/mod_wsgi-4.9.0
RUN ./configure --with-apxs=/usr/local/apache2/bin/apxs --with-python=/usr/bin/python3.9 && \
    make && \
    make install && \
    make clean

WORKDIR /app
COPY requirements.txt .
RUN python3.9 -m pip install -r requirements.txt

COPY my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY . .