FROM node:10.16.3
ENV GATSBY_TELEMETRY_DISABLED=1

WORKDIR /app/website

COPY ./website /app/website
RUN make configure

EXPOSE 8000
CMD ["make", "dev-server"]