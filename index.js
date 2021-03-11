var vm = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
})

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app-2',
  data: obj
})

new Vue({
  el: '#app-3',
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})
