const { add } = require('./async-functions')

// Pass! Because it didn't wait for 2 seconds to see the assertion
test('Async test demo', () => {
    setTimeout(() => {
        expect(1).toBe(2)
    }, 2000)
})

// Tell jest this is a async funciton, Jest will check assertion untile the done() funcation is called
test('Async test demo 2', (done) => {
    setTimeout(() => {
        expect(1).toBe(2)
        done()
    }, 2000)
})

