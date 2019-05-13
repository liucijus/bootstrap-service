module.exports = context => {
    //const config = context.config.json('nothing');
    //const producer = context.greynode.aProducer('node-service');

    return {
        //producer,
        greynode: context.greynode
    }
};
