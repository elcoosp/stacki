const StackiBase = require('./StackiBase')

const Stacki = (...items) => {
  const _stack = [...items]
  const pop = () => (_stack.pop(), newStack)
  const push = (...xs) => (_stack.push(...xs), newStack)

  const newStack = Object.assign(
    {
      pop,
      push
    },
    StackiBase(_stack)
  )
  return newStack
}

module.exports = Stacki
