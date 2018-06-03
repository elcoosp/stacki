const StackiBase = _stack => ({
  top: () => _stack[_stack.length - 1],
  inspect: () => `Stack top ${_stack.slice().reverse()}`,
  isEmpty: () => _stack.length === 0,
  size: () => _stack.length,
  get: () => _stack.slice()
})

module.exports = StackiBase
