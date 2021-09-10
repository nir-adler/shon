FROM node:14.17.6
WORKDIR /app
RUN wget https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tar.xz && tar -xvf Python-3.9.7.tar.xz \
    && cd Python-3.9.7 && ./configure && make && make install 
RUN rm -r Python-3.9.7 && rm Python-3.9.7.tar.xz
RUN /usr/local/bin/python3.9 -m pip install --upgrade pip && pip3 install transformers \
     && pip3 install torch
COPY ./package.json .
RUN npm install
COPY . . 
RUN chmod 777 node_modules
CMD ["npm","run","dev"]