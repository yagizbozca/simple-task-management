FROM node:20.18

# The default process in the container might not propagate signals properly to 
# child processes like tsx. Use a lightweight init system like tini to manage this.
RUN apt-get update && apt-get install -y tini && rm -rf /var/lib/apt/lists/* 
# Setting tini as the entrypoint
ENTRYPOINT ["/usr/bin/tini", "--"]

WORKDIR /usr/src/app

COPY ./task-management-api .
RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]
