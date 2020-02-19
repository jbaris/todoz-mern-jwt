# Intro
This is a MERN stack with JWT authentication proof of concept. The idea is to use this stack to achieve:
- at the server side, a simple, scalable and secure REST API.
- at the client side, a responsive material-design single-page web application.

# How to run
Execute this on a terminal:
```
  git clone https://github.com/jbaris/todoz-mern-jwt.git todoz
  cd todoz
  sudo docker-compose up
```

# How to test
Open in your browser at:
- http://localhost : the application
- http://localhost:5000/api-docs : the server API documentation

# Stack
- MERN ([MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [ReactJS](https://reactjs.org/), [Node](https://nodejs.org/en/))
- JWT authentication (with [express-jwt](https://github.com/auth0/express-jwt#readme) and [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme))
- [material-ui](https://material-ui.com/) for UI skeleton (based on [templates](https://material-ui.com/getting-started/templates/#react-templates))
- [material-table](https://material-table.com) for todo list table
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme) to hash passwords
- [morgan](https://github.com/expressjs/morgan#readme) to log http requests
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc#swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express#swagger-ui-express) for Swagger UI documentation ([OpenAPI 3](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md))
- [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) for packaging and delivery

# Screenshots

SignIn

![SignIn](https://raw.githubusercontent.com/jbaris/site-images/master/todoz-mern-jwt/login.png)

SignUp

![SignUp](https://raw.githubusercontent.com/jbaris/site-images/master/todoz-mern-jwt/signup.png)

Home

![Home](https://raw.githubusercontent.com/jbaris/site-images/master/todoz-mern-jwt/todo-list.png)

Server API documentation

![ServerAPI](https://raw.githubusercontent.com/jbaris/site-images/master/todoz-mern-jwt/server-api-doc.png)

# Roadmap
- [x] JWT token renew.
- [x] Improve properties management, based on environments (consider running from docker services).
- [x] Add Swagger for API documentation.
- [ ] Improve docker-compose to allow live reload for development.
- [ ] Unit and integration tests.
- [ ] Improve UI error messages.
- [ ] Improve overall UI design.
- [ ] Migrate to TypeScript?

# License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
