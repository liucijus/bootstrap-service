const createTodoService = require('./services/todos');
const express = require('express');

module.exports = (app, context) => {
    const dbClient = context.mysql.client('messages');
    const todoService = createTodoService(dbClient);

    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({message: 'hello world'});
    });

    app.post('/todo', async (req, res) => {
        try{
            const {todo} = req.body;
            await todoService.postTodo(todo);
            res.send('inserted successfully');
        } catch(err) {
            res.end(err);
        }
    });

    app.get('/todos', async (req, res) => {
        const response = await todoService.getTodos();
        res.json(response);
    });
    return app;
}
