const testkit = require('@wix/wix-bootstrap-testkit');

function bootstrapServer() {
    return testkit.server('./index');
}

module.exports.app = bootstrapServer();
