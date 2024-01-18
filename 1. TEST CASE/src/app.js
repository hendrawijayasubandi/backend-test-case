const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Swagger Options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Library Management API',
            version: '1.0.0',
        },
    },
    apis: ['./src/controllers/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
const path = require('path');

const booksController = require(path.join(__dirname, 'controllers', 'books.controller'));
const membersController = require(path.join(__dirname, 'controllers', 'members.controller'));

app.use('/books', booksController);
app.use('/members', membersController);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
