const prepareChart = require('./lib/prepare');

async function prepare(pluginConfig, context) {
    await prepareChart(pluginConfig, context);
}

module.exports = { prepare };
