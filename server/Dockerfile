FROM node:14.17.6
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . . 
RUN chmod 777 node_modules && cd pythoni/ && ./configure && make && make test \
    && make install 
RUN rm -r /usr/bin/python &&  pip3 install transformers && pip3 install torch
# && 
# apt update &&  apt install python3-pip \
#     && pip3 install transformers && pip3 install torch 
CMD ["npm","run","dev"]
