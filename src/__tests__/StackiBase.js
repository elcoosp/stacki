const StackiBase = require('../StackiBase')
let s
beforeEach(() => {
  s = StackiBase([])
})

test('should return a new array representing the stack when get method is called', () => {
  const a = [1, 2, 3]
  const stack = StackiBase(a)
  expect(stack.get()).toEqual([1, 2, 3])
  expect(stack.get()).not.toBe(a)
})

test('should return the the item on top of the stack', () => {
  expect(s.top()).toEqual(undefined)
})

test('should return a string describing the stack', () => {
  expect(s.inspect()).toBe('Stack top ')
})

test('should be true if the stack is empty, otherwise false', () => {
  expect(s.isEmpty()).toBe(true)
})

test('should reutrn the size of the stack', () => {
  expect(s.size()).toBe(0)
})
