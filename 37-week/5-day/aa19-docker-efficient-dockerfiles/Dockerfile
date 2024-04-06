# FROM ubuntu


# RUN apt-get update
# RUN apt-get upgrade -y
# RUN DEBIAN_FRONTEND=noninteractive apt-get install -y npm nodejs
FROM node:18-alpine

# ADD . /app

WORKDIR /app

COPY . .

# RUN apt-get install -y openssh-server nginx
RUN npm install

# CMD sshd & cd /app && npm start

CMD ["npm", "start"]