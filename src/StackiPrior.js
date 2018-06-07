const StackiBase = require('./StackiBase')

const spliceOneEqualTo = (condition, arr) =>
  arr.splice(arr.findIndex(x => x === condition(x)), 1)

const StackiPrior = (priorityDeepness, prioritizer, ...items) => {
  const _stack = [...items]

  const getNextToPop = () =>
    _stack.slice(-priorityDeepness).sort(prioritizer)[0]

  const push = (...xs) => (_stack.push(...xs), self)

  const pop = () => (spliceOneEqualTo(getNextToPop, _stack), self)

  const popReturned = () => spliceOneEqualTo(getNextToPop, _stack)[0]

  const self = Object.assign(
    {
      pop,
      push,
      popReturned,
      getNextToPop,
      it: {
        shallowPop: {},
        deepPop: {}
      }
    },
    StackiBase(_stack)
  )

  self.it.shallowPop[Symbol.iterator] = function*() {
    const shallowStack = _stack.slice()
    const getNextToPop = () =>
      shallowStack.slice(-priorityDeepness).sort(prioritizer)[0]

    while (shallowStack.length > 0) {
      yield spliceOneEqualTo(getNextToPop, shallowStack)[0]
    }
  }

  self.it.deepPop[Symbol.iterator] = function*() {
    while (_stack.length > 0) {
      yield popReturned()
    }
  }

  return self
}

module.exports = StackiPrior
