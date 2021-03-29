exports.config = {
    capabilities: [{
        automationName: 'UiAutomator2',
        deviceName: 'Pixel2',
        platformName: 'Android',
        platformVersion: '8.1',
        browserName: 'chrome',
        newCommandTimeout: 240,
    }],
    port: 4723,
    maxInstances: 1,
    baseUrl: 'https://formy-project.herokuapp.com/',
    services: ['appium'],
    appium: {
        command: 'appium',
    },
};