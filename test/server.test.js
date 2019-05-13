const {expect} = require('chai').use(require('chai-as-promised'));
const axios = require('axios');
const testkit = require('@wix/wix-bootstrap-testkit');
const mysqlTestKit = require('@wix/wix-mysql-testkit');

describe('API', async () => {
    const mainApp = testkit.server('./index');
    const schema = 'test/*.sql';
    const mysqlKit = mysqlTestKit({ schema, database: 'messages' }).beforeAndAfter();
    const baseUrl = 'http://localhost:3000';

    afterEach(async () => {
        await mysqlKit.reloadSchema();
    });

    before(async () => {
        await mysqlKit.emitConfig();
        await mainApp.start();
    });

    after(async () => {
        await mainApp.stop();
    });


    it('inserts a todo', async () => {
        const response = await axios.post(`${baseUrl}/todo`, {
            todo: 'take out the trash'
        });
        expect(response.data).to.equal('inserted successfully');
    });

    it('extracts todos', async () => {
        await axios.post(`${baseUrl}/todo`, {
            todo: 'do the dishes'
        });
        const response = await axios.get(`${baseUrl}/todos`);
        const [{description}] = response.data;
        expect(response.data).to.have.lengthOf(1);
        expect(description).to.equal('do the dishes');
    });

    it('returns a valid response for ', async () => {
        const {
            data: {
                message
            }
        } = await axios.get(baseUrl);
        expect(message).to.equal('hello world');
    });
});
