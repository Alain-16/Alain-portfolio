FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

ARG NEXT_PUBLIC_CAL_LINK="mugisha-alain-sbzg3d/30min"

ENV NEXT_PUBLIC_CAL_LINK=$NEXT_PUBLIC_CAL_LINK

RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY --from=builder /app/out /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

