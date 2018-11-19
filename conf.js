exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    specs: ['tests/specs/signup-spec.js'],
    onPrepare: function() {
        browser.manage().timeouts().implicitlyWait(10000);
        // Se for true, não conecta na controller de Angular apps
        browser.ignoreSynchronization = true;
    },
    capabilities: {
        'browserName': 'chrome'
    }
}