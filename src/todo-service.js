const {com} = require('./generated/service-api');
const api = com.wixpress.somethingtoplatform.node.proto;

class DefaultTodoService extends api.TodoService {

    constructor(context) {
        super();
        this.dbClient = context.mysql.client('messages');
    }

    getTodos() {
        return this.dbClient.queryPromise('SELECT description from todos')
    }


    postTodo() {
        return new Promise((resolve, reject) => {
            this.dbClient.query(`INSERT INTO todos (description)
                                 VALUES (?)`, [todo], (error, result) => {
                if (error) {
                    return reject(error);
                };
                resolve(result);
            })
        });
    }
}

module.exports = (config) => new DefaultTodoService(config);
