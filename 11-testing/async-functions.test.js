const { add } = require('./async-functions')

test('Should add two numbers', (done) => {
  add(2, 3).then((sum) => {
      expect(sum).toBe(5)
      done()
  })
})

// asynce function will reaturn a promise, Jest will wait it is done
test('Should add two numbers async/await', async () => {
  const sum = await add(10, 22)
  expect(sum).toBe(32)  
})