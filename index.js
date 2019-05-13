const bootstrap = require('@wix/wix-bootstrap-ng');
const greynode = require('wix-bootstrap-greynode');

bootstrap()
    .use(require('@wix/wix-bootstrap-mysql'))
    .service('./src/todo-service')
    //.express('./lib/express-app')
    .start();
