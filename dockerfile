# node version
FROM node:22-alpine

# app directrory creation
WORKDIR /app

#package.json file copy

COPY package*.json ./

# install dependencies
RUN npm install

# copy the source code
COPY . .

# Expose port 

EXPOSE 5173

#start app 

CMD ["npm" , "run" , "dev"]

