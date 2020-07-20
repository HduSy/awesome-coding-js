const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

function MyPromise(excutor) {
    this.state = PENDING
    this.value = null
    this.reason = null

    function reject(reason) {
        if (this.state === PENDING) {
            this.state = REJECTED
            this.reason = reason
        }
    }

    function resolve(val) {
        if (this.state === PENDING) {
            this.state = FULLFILLED
            this.value = val
        }
    }

    try {
        excutor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
