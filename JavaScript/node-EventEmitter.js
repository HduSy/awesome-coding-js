const events = require('events')
const emitter = new events.EventEmitter()

let listener1 = function () {
    console.log('Listener1监听器执行')
}
let listener2 = function () {
    console.log('Listener2监听器执行')
}
emitter.addListener('connect', listener1)
emitter.on('connect', listener2)
let emitterCount = emitter.listenerCount('connect')
console.log(`connect事件注册了${emitterCount}个监听器`)

emitter.emit('connect')

emitter.removeListener('connect', listener1)

emitterCount = emitter.listenerCount('connect')
console.log(`connect事件注册了${emitterCount}个监听器`)
