const fsPromises = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

module.exports = async (pluginConfig, context) => {
    const packageDir = path.dirname(require.resolve(pluginConfig.packageName));
    const appVersion = require(path.join(packageDir, 'package.json')).version;
    const filePath = path.join(pluginConfig.chartPath, 'Chart.yaml');
    const chartYaml = await fsPromises.readFile(filePath);
    const oldChart = yaml.load(chartYaml);

    const newChart = { ...oldChart, appVersion: appVersion };

    await fsPromises.writeFile(filePath, yaml.dump(newChart));
};
