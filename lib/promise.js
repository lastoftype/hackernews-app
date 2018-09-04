import Promise from 'bluebird'

Promise.config({
    // Enable warnings
  warnings: true,
    // Enable long stack traces
  longStackTraces: true,
    // Enable cancellation
  cancellation: true,
    // Enable monitoring
  monitoring: true,
})

export default Promise
