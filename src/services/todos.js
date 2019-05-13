function todoService(dbClient) {
    const getTodos = () => dbClient.queryPromise('SELECT description from todos');
    const postTodo = (todo) => new Promise((resolve, reject) => {
        dbClient.query(`INSERT INTO todos (description) VALUES (?)`, [todo], (error, result) => {
            if(error) {
                return reject(error);
            };
            resolve(result);
        })
    });
    return {
        getTodos,
        postTodo
    }
}

module.exports = todoService;
