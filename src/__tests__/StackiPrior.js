const StackiPrior = require('../StackiPrior')
let s
const baseStack = [1, 2, 3, 4, 5, 6]
beforeEach(() => {
  s = StackiPrior(3, (a, b) => a - b)
  s.push(...baseStack)
})

test('should return the next item to pop in the stack but not mutate it', () => {
  expect(s.getNextToPop()).toBe(4)
  expect(s.get()).toEqual(baseStack)
})

test('should push items and return the stacki object', () => {
  s.push(1, 2, 3).push(4)
  expect(s.get()).toEqual([...baseStack, 1, 2, 3, 4])
})

test('should pop the item matching the prioritizer (executed for the priority deepness of the stack) and return the stacki object', () => {
  s
    .pop()
    .push(7)
    .pop()
  expect(s.get()).toEqual([1, 2, 3, 6, 7])
})

test(`should pop an item and return it's value`, () => {
  expect(s.popReturned()).toBe(4)
})

test('should iterate and pop values from a shallow of the stack', () => {
  const a = [...s.it.shallowPop]
  expect(s.get()).toEqual(baseStack)
  expect(a).toEqual([4, 3, 2, 1, 5, 6])
})

test('should iterate and pop values from the internal stack itself', () => {
  const a = [...s.it.deepPop]
  expect(s.get()).toEqual([])
  expect(a).toEqual([4, 3, 2, 1, 5, 6])
})
