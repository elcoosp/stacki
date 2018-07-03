const Stacki = require('../src/Stacki')
let s
beforeEach(() => {
  s = Stacki()
})

test('should push items and return the stacki object', () => {
  s.push(1, 2, 3).push(4)
  expect(s.get()).toEqual([1, 2, 3, 4])
})

test('should pop items and return the stacki object', () => {
  s.push(1, 2, 3)
    .pop()
    .push(4)
  expect(s.get()).toEqual([1, 2, 4])
})
