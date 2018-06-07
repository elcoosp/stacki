const StackiBase = require('./StackiBase')

const Stacki = (...items) => {
  const _stack = [...items]
  const pop = () => (_stack.pop(), self)
  const push = (...xs) => (_stack.push(...xs), self)

  const self = Object.assign(
    {
      pop,
      push
    },
    StackiBase(_stack)
  )
  return self
}

module.exports = Stacki
