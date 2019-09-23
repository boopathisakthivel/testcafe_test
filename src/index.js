const createTestCafe = require('testcafe');
let testcafe = null;

createTestCafe('localhost', 1337)
.then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();

    return runner
        .src(['tests/fixture.js'])
        .browsers(['chrome'])
        .run();
})
.then(failedCount => {
    console.log('Tests failed: ' + failedCount);
    testcafe.close();
});