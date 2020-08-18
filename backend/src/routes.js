const express = require('express');
const todoController = require('../src/controllers/TodoController');

const routes = express.Router();


routes.get('/todos',todoController.index);
routes.post('/todos',todoController.create);
routes.delete('/todos/:id',todoController.delete);
routes.put('/todos/:id',todoController.update);


module.exports = routes;