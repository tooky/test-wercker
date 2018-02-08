test('something happens', () => {
  expect(sum(1,2)).toBe(3)
})

test('env', () => {
  expect(process.env).toBe({})
})
