FROM node:0.12

# install grunt-cli
RUN npm install -g grunt-cli@0.1.13 \
    && npm cache clear
