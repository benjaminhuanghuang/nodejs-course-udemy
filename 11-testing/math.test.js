const { calculateTip } = require('./math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
    
    // if(total !==13)
    //   throw new Error("Total tip whoube be 13. Got "+ total);
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})
