exports.config = {
    runner: 'local',
    specs: [
        './formyHerokuApp/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'firefox',
        acceptInsecureCerts: true
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://formy-project.herokuapp.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['selenium-standalone', { drivers: {firefox: 'latest'}}]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeTest() {
        browser.maximizeWindow();
    }
}
