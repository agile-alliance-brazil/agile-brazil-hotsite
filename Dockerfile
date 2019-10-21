FROM node:10.16.3

WORKDIR /app/website

EXPOSE 8000
COPY ./website /app/website
RUN make configure

CMD ["make", "dev-server"]
